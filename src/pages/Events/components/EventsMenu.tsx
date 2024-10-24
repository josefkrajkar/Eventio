// Components
import EventsViewSwitcher from "./EventsViewSwitcher"
import EventsFilter from "./EventsFilter"

// Styles
import '../../../styles/pages/Events/EventsMenu.css'

function EventsMenu () {

  return (
    <div className='events-menu'>
      <EventsFilter />
      <EventsViewSwitcher />
    </div>
  )
}

export default EventsMenu
