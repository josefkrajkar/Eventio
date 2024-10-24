// Hooks
import { useErrorMsg } from '../../../hooks/useErrorMsg'

// Styles
import '../../../styles/pages/Login/LoginInfo.css'

function LoginInfo() {
  const { loginError } = useErrorMsg()

  return (
    <div className='login-info-wrapper'>
      <h1>Sign in to Eventio.</h1>
      <p className={`login-info${loginError ? ' error-info' : ''}`}>
        {
          loginError ||
          "Enter your details below."
        }
      </p>
    </div>
  )
}

export default LoginInfo
