// Components
import EventsList from './components/EventsList'
import EventsMenu from './components/EventsMenu'

// Styles
import '../../styles/pages/Events/EventsPage.css'

function EventsPage() {

  return (
    <div className='events-page'>
      <EventsMenu />
      <EventsList />
    </div>
  )
}

export default EventsPage
