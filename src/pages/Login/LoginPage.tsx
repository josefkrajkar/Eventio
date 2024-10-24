// Components
import LoginForm from './components/LoginForm'
import LoginInfo from './components/LoginInfo'

// Styles
import '../../styles/pages/Login/LoginPage.css'

function LoginPage () {

  return (
    <div className='login-page'>
      <LoginInfo />
      <LoginForm />
    </div>
  )
}

export default LoginPage
