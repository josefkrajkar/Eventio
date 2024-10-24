import { useNavigate } from 'react-router-dom'

// Components
import Button from '../../components/common/Button'

// Styles
import '../../styles/pages/404/404.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='not-found-page'>
      <div className='not-found-info-wrapper'>
        <h1>404 Error - page not found</h1>
        <p className='not-found-info'>
          Seems like Darth Vader just hits our website and drops it down.
          Please press the refresh button and everything should be fine again.  
        </p>
        <Button
          onClick={() => navigate('/')}
          className='button refresh-button'
          value='Refresh'
        />
      </div>
    </div>
  )
}

export default NotFound
