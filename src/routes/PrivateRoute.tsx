import React from 'react'
import { Navigate } from 'react-router-dom'

// Hooks
import { useAuth } from '../hooks/useAuth'

// Components
import Loader from '../components/common/Loader'

interface PrivateRouteProps {
  children: React.ReactElement
}

function PrivateRoute ({ children }: PrivateRouteProps) {
  const { isAuthenticated, isAuthLoading } = useAuth()

  if (isAuthLoading) {
    return <Loader darker larger/>
  }

  if (!isAuthenticated) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
