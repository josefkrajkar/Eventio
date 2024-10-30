import { useEffect, useState, useRef } from "react"

// Components
import EventBtn from "./EventBtn"

// Hooks
import { useLayoutRules } from "../../../hooks/useLayoutRules"

// Utils
import { formatDate } from "../../../utils/formatDate"
import { formatAttendeess } from "../../../utils/formatAttendees"

// Types
import { EventType } from "../../../types/event"

// Styles
import '../../../styles/pages/Events/EventCard.css'

function EventCard (event: EventType) {
  const { showFullDate } = useLayoutRules()
  const {id, title, description, startsAt, attendees, capacity, owner} = event 
  const {firstName, lastName} = owner
  const [isVisible, setIsVisible] = useState(false)

  const eventCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              setIsVisible(true)
            }
          } else {
            if (isVisible) {
              setIsVisible(false)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (eventCardRef.current) {
      observer.observe(eventCardRef.current)
    }

    return () => {
      if (eventCardRef.current) {
        observer.unobserve(eventCardRef.current)
      }
    }
  }, [id, isVisible])

  if (!isVisible) {
    return <div key={id} className='event-card' ref={eventCardRef}/>
  }

  return (
    <div key={id} className='event-card' ref={eventCardRef}>
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
