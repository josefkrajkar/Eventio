import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Button from "../../../components/common/Button"

// Hooks
import { useAuth } from "../../../hooks/useAuth";
import { useEvents } from "../../../hooks/useEvents";

// Types
import { EventType } from "../../../types/event";

function EventBtn ({ event }: {event: EventType}) {
  const { userProfile } = useAuth()
  const { attendEvent, isAlreadyAttending } = useEvents()
  const navigate = useNavigate()
  
  const { id, attendees, capacity, startsAt, owner } = event
  const isAttendant = isAlreadyAttending(attendees)
  
  const getButtonValues = useCallback(() => {
    if (userProfile?.id === owner.id) {
      return ({
        value: 'Edit',
        className: 'button small event-btn edit',
        onClick: () => navigate(`/events/edit/${id}`)
      })
    }
    if (isAttendant) {
      return ({
        value: 'Leave',
        className: 'button small event-btn danger',
        onClick: () => attendEvent({eventId: id, unattend: true})
      })
    }

    return ({
      value: 'Join',
      className: 'button small event-btn',
      onClick: () => attendEvent({eventId: id, unattend: false})
    })
  }, [
    id,
    owner,
    userProfile,
    isAttendant,
    navigate,
    attendEvent
  ]);

  return (
    <Button
      {...getButtonValues()}
      disabled={
        attendees.length >= capacity ||
        new Date(startsAt) < new Date()
      }
    />
  )
}

export default EventBtn
