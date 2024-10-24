import { useContext } from 'react'

// Context
import { EventsContext } from '../context/EventsContext'

export function useEvents () {
  const context = useContext(EventsContext)
  if (!context) {
    throw new Error('useEvents must be used within an EventsContext')
  }
  return context
}
