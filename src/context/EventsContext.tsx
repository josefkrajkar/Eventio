import React, { createContext, useMemo, useEffect, useState, useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

// Services
import { eventsService } from "../services/events/eventsService"
import { NewEventType } from '../types/event'

// Hooks
import { useErrorMsg } from '../hooks/useErrorMsg'
import { EventType as LocalEventType } from '../types/event'
import { useAuth } from '../hooks/useAuth'

// Types
import { ProfileType } from '../types/profile'

// Constants
const EVENT_FILTERS = ['ALL', 'FUTURE', 'PAST']

type EventsContextType = {
  filteredEvents: LocalEventType[]
  error: unknown
  isLoading: boolean
  addEvent: (newEvent: NewEventType) => void
  view: 'grid' | 'list'
  setView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>
  EVENT_FILTERS: typeof EVENT_FILTERS
  filter: typeof EVENT_FILTERS[number]
  handleFiltering: (filter: typeof EVENT_FILTERS[number]) => void
  attendEvent: ({eventId, unattend}: {eventId: string, unattend: boolean}) => void
  isAlreadyAttending: (attendees: ProfileType[]) => boolean
}

export const EventsContext = createContext<EventsContextType | undefined>(undefined)

export function EventsContextProvider ({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient()
  const { setNewEventError } = useErrorMsg()
  const { data: events, error, isLoading } = useQuery<LocalEventType[]>(['events'], eventsService.fetchEvents)
  const { userProfile } = useAuth()

  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [filter, setFilter] = useState<typeof EVENT_FILTERS[number]>('ALL')
  const [filteredEvents, setFilteredEvents] = useState<LocalEventType[]>(events || [])

  useEffect(() => {
    setFilter('ALL')
    setFilteredEvents(events || [])
  }, [events])

  const handleFiltering = useCallback((filter: typeof EVENT_FILTERS[number]) => {
    switch (filter) {
      case 'FUTURE': {
        setFilteredEvents(
          (events || []).filter(event => new Date(event.startsAt) > new Date())
        )
        break;
      }
      case 'PAST': {
        setFilteredEvents(
          (events || []).filter(event => new Date(event.startsAt) < new Date())
        )
        break;
      }
      default: {
        setFilteredEvents(events || [])
      }
    }
    setFilter(filter);
  }, [events])

  const isAlreadyAttending = useCallback((attendees: ProfileType[]) => {
    if (!userProfile) return false
    return attendees.some(attendee => attendee.id === userProfile.id)
  },[userProfile]);

  const addEventMutation = useMutation(
    (newEvent: NewEventType) => eventsService.createEvent(newEvent),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['events'])
      },
      onError: (error: Error) => {
        console.log("Error adding event: ", error)
        setNewEventError('Oops, there was an error adding the event.')
      }
    }
  )

  const attendEventMutation = useMutation(
    ({eventId, unattend}: {eventId: string, unattend: boolean}) => eventsService.attendEvent({eventId, unattend}),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['events'])
      },
      onError: (error: Error) => {
        console.log("Error attending event: ", error)
        setNewEventError('Oops, there was an error un/attending the event.')
      }
    }
  )

  const contextValue = useMemo(() => (
    {
      filteredEvents,
      error,
      isLoading,
      addEvent: addEventMutation.mutate,
      view,
      setView,
      EVENT_FILTERS,
      filter,
      handleFiltering,
      attendEvent: attendEventMutation.mutate,
      isAlreadyAttending,
    }
  ), [
    filteredEvents,
    error,
    isLoading,
    addEventMutation.mutate,
    view,
    setView,
    filter,
    handleFiltering,
    attendEventMutation.mutate,
    isAlreadyAttending
  ])

  return (
    <EventsContext.Provider value={contextValue}>
      {children}
    </EventsContext.Provider>
  )
}
