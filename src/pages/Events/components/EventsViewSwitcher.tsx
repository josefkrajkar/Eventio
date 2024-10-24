// Styles
import '../../../styles/pages/Events/EventsViewSwitcher.css'

// Hooks
import { useEvents } from "../../../hooks/useEvents"

function EventsViewSwitcher () {
  const {view, setView} = useEvents();

  return (
    <div
      className='events-view-switcher'
      onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
    >
      {
        view === 'grid'
          ? (
            <>
              <img src='/images/svgs/Grid-dark.svg' alt='Active grid Icon' />
              <img src='/images/svgs/List-view.svg' alt='List view Icon' />
            </>
          )
          : (
            <>
              <img src='/images/svgs/Grid.svg' alt='Grid Icon' />
              <img src='/images/svgs/List-view-dark.svg' alt='Active list view Icon' />
            </>
          )
      }
    </div> 
  )
}

export default EventsViewSwitcher
