import { Outlet } from 'react-router-dom'

// Components
import BackgroundImg from './BacgroundImg'
import Footer from '../Footer/Footer'
import Header from "../Header/Header"
import Loader from './Loader'

// Styles
import '../../styles/components/Layout.css'

// Hooks
import { useLayoutRules } from '../../hooks/useLayoutRules'
import { useEvents } from '../../hooks/useEvents'
import { useAuth } from '../../hooks/useAuth'

function Layout () {
  const {onDashboard, onNewEventPage, showBackgroundImg} = useLayoutRules()
  const { isLoading } = useEvents()
  const { isAuthLoading } = useAuth()

  return (
    <div className={
      `layout${onDashboard ? ' on-dashboard' : ''}${onNewEventPage ? ' on-new-event' : ''}`
    }>
      <BackgroundImg />
      {
        (isLoading && !isAuthLoading) && (
          <div className='loading-overlay'>
            <Loader darker larger />
          </div>
        )
      }
      <Header />
      <main
        className={
          showBackgroundImg
            ? 'with-image'
            : undefined
        }
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
