// Axios
import axiosInstance from '../api/axiosInstance'

// Types
import type { EventType, NewEventType } from '../../types/event'

export const eventsService = {
  fetchEvents,
  createEvent,
  attendEvent
}

async function fetchEvents(): Promise<EventType[]> {
  const { data } = await axiosInstance.get<EventType[]>('/events')
  return data
}

async function createEvent(newEvent: NewEventType): Promise<EventType> {
  const { data } = await axiosInstance.post<EventType>('/events', newEvent)
  return data
}

async function attendEvent({eventId, unattend}: {eventId: string, unattend?: boolean}): Promise<void> {
  const { data } = unattend
    ? await axiosInstance.delete(`/events/${eventId}/attendees/me`)
    : await axiosInstance.post(`/events/${eventId}/attendees/me`)
  return data
}
