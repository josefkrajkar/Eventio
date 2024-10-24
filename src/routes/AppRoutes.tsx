import {lazy, Suspense} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// Components
import PrivateRoute from './PrivateRoute'
import Layout from '../components/common/Layout'
import Loader from '../components/common/Loader'

// Lazy-loaded Pages
const EventsPage = lazy(() => import('../pages/Events/EventsPage'))
const LoginPage = lazy(() => import('../pages/Login/LoginPage'))
const NewEventPage = lazy(() => import('../pages/NewEvent/NewEvent'))
const NotFoundPage = lazy(() => import('../pages/404/404page'))

function AppRoutes () {
  return (
    <Suspense fallback={
      <div className="layout loading-overlay">
        <Loader darker larger />
      </div>
    }>
      <Routes>
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/events"
            element={
              <PrivateRoute>
                <EventsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/events/new"
            element={
              <PrivateRoute>
                <NewEventPage />
              </PrivateRoute>
            }
          />

          {/* Redirect to /events if authenticated */}
          <Route path="/" element={<Navigate to="/events" />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
