// Components
import Profile from '../Profile/Profile'

// Hooks
import { useLayoutRules } from '../../hooks/useLayoutRules'

// Styles
import '../../styles/components/Header.css'

function Header () {
  const {showBackgroundImg, onNewEventPage} = useLayoutRules()

  return (
    <header className='header'>
      <a className='link' href='/' aria-label='Eventio logo'>
        <img
          className='logo'
          src={
            showBackgroundImg
              ? '/images/svgs/Logo-white.svg'
              : '/images/svgs/Logo.svg'
          }
          alt='logo'
        />
      </a>
      
      {
        onNewEventPage
        ? (
          <a className='close' href='/events' aria-label='Close form'>
            <img
              className='close-icon'
              src='/images/svgs/Close.svg'
              alt='close'
            />
            <span className='close-text'>
              Close
            </span>
          </a>
        ) 
        : (
          <Profile />
        )
      }
    </header>
  )
}

export default Header
