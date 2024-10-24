// Components
import NewEventForm from './components/NewEventForm'
import NewEventInfo from './components/NewEventInfo'

// Styles
import '../../styles/pages/NewEvent/NewEvent.css'

function NewEvent() {

  return (
    <div className='new-event'>
      <NewEventInfo />
      <NewEventForm />
    </div>
  )
}

export default NewEvent
