import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'

// Services
import { authService } from '../services/auth/authService'

// Types
import type { LoginCredentialsType } from '../types/login'

// Axios setup
import { setUpInterceptors } from '../services/api/axiosInstance'
import { ProfileType } from '../types/profile'

type AuthContextType = {
  isAuthenticated: boolean
  login: (credentials: LoginCredentialsType) => Promise<void>
  logout: () => void
  isAuthLoading: boolean
  setIsAuthLoading: React.Dispatch<React.SetStateAction<boolean>>
  accessToken: string | null
  refreshToken: string | null
  userProfile: ProfileType | null
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<ProfileType | null>(null)
  
  useEffect(() => {
    const initializeAuth = async () => {
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        setIsAuthLoading(false)
        return
      }
      try {
        const { accessToken, profile } = await authService.refreshToken(refreshToken)
        setUserProfile(profile)
        setAccessToken(accessToken)
        setRefreshToken(refreshToken)
        setIsAuthenticated(true)
      } catch (err) {
        // If the refresh token is invalid, log the user out
        console.error(err)
        localStorage.removeItem('refreshToken')
        setUserProfile(null)
        setIsAuthenticated(false)
        setRefreshToken(null)
      } finally {
        setIsAuthLoading(false)
      }
    }

    initializeAuth()
  }, [])

  useEffect(() => {
    setUpInterceptors(
      () => ((accessToken && refreshToken) ? { accessToken, refreshToken } : null),
      (newToken) => setAccessToken(newToken)
    )
  }, [accessToken, refreshToken])

  const login = useCallback(async (credentials: LoginCredentialsType) => {
    const { accessToken, refreshToken, profile } = await authService.login(credentials)
    localStorage.setItem('refreshToken', refreshToken)
    setUserProfile(profile)
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    setIsAuthenticated(true)
  }, [])
  
  const logout = useCallback(() => {
    localStorage.removeItem('refreshToken')
    setUserProfile(null)
    setAccessToken(null)
    setRefreshToken(null)
    setIsAuthenticated(false)
  }, [])

  const contextValue = useMemo(() => (
    {
      isAuthenticated,
      login,
      logout,
      isAuthLoading,
      setIsAuthLoading,
      accessToken,
      refreshToken,
      userProfile
    }
  ), [
    isAuthenticated,
    login,
    logout,
    isAuthLoading,
    accessToken,
    refreshToken,
    userProfile
  ])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
