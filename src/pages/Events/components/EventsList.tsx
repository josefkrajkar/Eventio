// Components
import EventCard from "./EventCard"
import EventRow from "./EventRow"

// Hooks
import { useEvents } from "../../../hooks/useEvents"

// Styles
import '../../../styles/pages/Events/EventsList.css'


function EventsList () {
  const { filteredEvents, view } = useEvents()

  return (
    <div className={`events-list${view === 'grid' ? ' in-grid' : ''}`}>
      {filteredEvents?.map(event => (
        view === 'grid'
          ? <EventCard key={event.id} {...event} />
          : <EventRow key={event.id} {...event} />
      ))}
    </div>
  )
}

export default EventsList
