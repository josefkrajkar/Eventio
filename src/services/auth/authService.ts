// Axios
import axiosInstance from '../api/axiosInstance'

// Types
import type { AuthResponseType, LoginCredentialsType } from '../../types/login'

export const authService = {
  login,
  refreshToken,
}

async function login(credentials: LoginCredentialsType): Promise<AuthResponseType> {
  const { headers, data } = await axiosInstance.post<AuthResponseType>('/auth/native', credentials)
  const accessToken = headers['authorization']
  const refreshToken = headers['refresh-token']
  return { accessToken, refreshToken, profile: data }
}

async function refreshToken(refreshToken: string): Promise<AuthResponseType> {
  const {headers, data} = await axiosInstance.post<AuthResponseType>('/auth/refresh-token', { refreshToken })
  const accessToken = headers['authorization']
  return { accessToken, refreshToken, profile: data }
}
