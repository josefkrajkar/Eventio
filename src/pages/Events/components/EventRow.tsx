import { useRef, useEffect, useState } from "react";

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
import '../../../styles/pages/Events/EventRow.css'

function EventRow (event: EventType) {
  const { showFullDate } = useLayoutRules()
  const {id, title, description, startsAt, attendees, capacity, owner} = event 
  const {firstName, lastName} = owner
  const [isVisible, setIsVisible] = useState(false)

  const eventRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              setIsVisible(true);
            }
          } else {
            if (isVisible) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (eventRowRef.current) {
      observer.observe(eventRowRef.current);
    }

    return () => {
      if (eventRowRef.current) {
        observer.unobserve(eventRowRef.current);
      }
    };
  }, [id, isVisible]);

  if (!isVisible) {
    return <div key={id} className='event-row' ref={eventRowRef} />
  }

  return (
    <div
      key={id}
      className='event-row'
      ref={eventRowRef}
    >
      <a href={`/events/${id}`} className='title'>
        <h2 className='title'>{title}</h2>
      </a>
      <p className='description'>{description}</p>
      <div className='bottom-wrapper'>
        <span className='event-author'>
          {`${firstName} ${lastName}`}
        </span>
        <div className='date-and-caacity-wrapper'>
          <span className='date'>{formatDate(startsAt, showFullDate)}</span>
          <span className='capacity'>{formatAttendeess(attendees, capacity)}</span>
        </div>
        <div className='event-btn-wrapper'>
          <EventBtn event={event} />
        </div>
      </div>
    </div>
  )
}

export default EventRow
