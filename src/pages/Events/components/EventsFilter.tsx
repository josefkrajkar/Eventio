import { useState } from "react"

// Hooks
import { useEvents } from "../../../hooks/useEvents"

// Styles
import '../../../styles/pages/Events/EventsFilter.css'

function Eventsfilter () {
  const { EVENT_FILTERS, filter, handleFiltering } = useEvents()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='events-filter-list'>
        {
          EVENT_FILTERS.map((eventFilter) => (
            <button
              key={eventFilter}
              onClick={() => handleFiltering(eventFilter)}
              className={`${filter === eventFilter ? ' active' : ''}`}
            >
              {eventFilter}
            </button>
          ))
        }
      </div>

      <button
        className='events-filter-dropdown'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='events-filter-label'>
          SHOW:
        </span>
        <span className='events-filter-selected'>
          {filter} EVENTS
        </span>
        <span className="select-arrow">▼</span>

        {
          isOpen &&
          <div className="events-dropdown-menu">
            {
              EVENT_FILTERS.map((eventFilter) => (
                <span
                  key={eventFilter}
                  onClick={() => {
                    handleFiltering(eventFilter)
                    setIsOpen(false)
                  }}
                >
                  {eventFilter}
                </span>
              ))                
            }
          </div>
        }
      </button>
    </>
  )
}

export default Eventsfilter
