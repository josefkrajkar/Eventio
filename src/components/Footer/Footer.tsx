import { useNavigate } from 'react-router-dom'

// Components
import CircleBtn from '../common/CircleBtn'

// Hooks
import { useLayoutRules } from '../../hooks/useLayoutRules'

// Styles
import '../../styles/components/Footer.css'

function Footer () {
  const navigate = useNavigate()
  const { onNewEventPage, onDashboard, showCircleBtn } = useLayoutRules()
  
  return (
    <footer className={`footer${onNewEventPage ? ' on-new-event' : ''}${onDashboard ? ' on-dashboard' : ''}`}>
      {
        showCircleBtn && (
          <CircleBtn
            className='footer-btn'
            onClick={() => navigate('/events/new')}
            backgroundImg='/images/svgs/Plus.svg'
          />
        )
      }
    </footer>
  )
}

export default Footer
