// Components
import EventBtn from "./EventBtn";

// Hooks
import { useLayoutRules } from "../../../hooks/useLayoutRules";

// Utils
import { formatDate } from "../../../utils/formatDate";
import { formatAttendeess } from "../../../utils/formatAttendees";

// Types
import { EventType } from "../../../types/event";

// Styles
import '../../../styles/pages/Events/EventCard.css'

function EventCard (event: EventType) {
  const { showFullDate } = useLayoutRules()
  const {id, title, description, startsAt, attendees, capacity, owner} = event 
  const {firstName, lastName} = owner

  return (
    <div key={id} className='event-card'>
      <span className='date'>{formatDate(startsAt, showFullDate)}</span>
      <a href={`/events/${id}`} className='title'>
        <h2>{title}</h2>
      </a>
      <span className='event-author'>
        {`${firstName} ${lastName}`}
      </span>
      <p className='description'>{description}</p>
      <div className='event-btn-wrapper'>
        <img src='/images/svgs/Human-icon.svg' alt='human-icon' />
        <span className='capacity'>{formatAttendeess(attendees, capacity)}</span>
        <EventBtn event={event} />
      </div>
    </div>
  )
}

export default EventCard
