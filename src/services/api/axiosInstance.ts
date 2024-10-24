import axios from 'axios'

// Services
import { authService } from '../auth/authService'

// Types
type FailedRequest = {
  resolve: (value?: string | PromiseLike<string> | null) => void,
  reject: (reason?: Error) => void
}

// Variables
let isRefreshing = false
let failedQueue: FailedRequest[] = []

// Instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EVENTIO_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
    'APIkey': import.meta.env.VITE_EVENTIO_API_KEY,
  },
})

function processQueue (error: Error | null, token: string | null = null) {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error)
    } else {
      promise.resolve(token)
    }
  })

  failedQueue = []
}

export function setUpInterceptors (
  getTokens: () => {accessToken: string, refreshToken: string} | null,
  setAccessToken: (token: string | null
) => void) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const tokens = getTokens()
      if (tokens?.accessToken) {
        config.headers['Authorization'] = tokens.accessToken
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  /**
   * Axios response interceptor to handle token refresh logic.
   * 
   * This interceptor checks for 401 Unauthorized errors and attempts to refresh the access token
   * using a refresh token. If the refresh token is valid, it retries the original request with the
   * new access token. If the refresh token is invalid or the refresh attempt fails, it rejects the
   * original request with an error.
   * 
   * @param {AxiosResponse} response - The response object from the Axios request.
   * @param {unknown} error - The error object from the Axios request.
   * @returns {Promise<AxiosResponse>} - The response object or a rejected promise with an error.
  */
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      const tokens = getTokens()

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject })
          })
            .then((token) => {
              originalRequest.headers['Authorization'] = token
              return axiosInstance(originalRequest)
            })
            .catch((err) => Promise.reject(err))
        }

        originalRequest._retry = true
        isRefreshing = true

        try {
          const refreshToken = tokens?.refreshToken
          if (!refreshToken) {
            return axiosInstance(originalRequest)
          }
          const { accessToken } = await authService.refreshToken(refreshToken)
          setAccessToken(accessToken)
          processQueue(null, accessToken)
          originalRequest.headers['Authorization'] = accessToken
          return axiosInstance(originalRequest)
        } catch (err) {
          processQueue(err as Error, null)
          return Promise.reject(err)
        } finally {
          isRefreshing = false
        }
      }

      return Promise.reject(error)
    }
  )
}

export default axiosInstance
