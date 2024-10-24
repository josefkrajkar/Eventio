import { memo } from 'react'

// Hooks
import { useErrorMsg } from '../../../hooks/useErrorMsg'

// Styles
import '../../../styles/pages/NewEvent/NewEventInfo.css'

function NewEventInfo() {
  const { newEventError } = useErrorMsg()

  return (
    <div className='new-event-info-wrapper'>
      <h1>Create new event</h1>
      <p className={`new-event-info${newEventError ? ' error-info' : ''}`}>
        {
          newEventError ||
          "Enter details below."
        }
      </p>
    </div>
  )
}

export default memo(NewEventInfo)
