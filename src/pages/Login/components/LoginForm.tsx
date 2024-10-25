import { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Button from '../../../components/common/Button'
import FormInput from '../../../components/common/Input'
import SignupLink from '../../../components/common/SignupLink'

// Hooks
import { useAuth } from '../../../hooks/useAuth'
import { useErrorMsg } from '../../../hooks/useErrorMsg'

// Styles
import '../../../styles/pages/Login/LoginForm.css'

function LoginForm () {
  const navigate = useNavigate()
  const { login, isAuthLoading, setIsAuthLoading } = useAuth()
  const { loginError, setLoginError } = useErrorMsg()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthLoading(true)
    try {
      await login(credentials)
      navigate('/events') // Redirect to events page after successful login
    } catch (e) {
      const error = e as AxiosError
      if (error.response && error.response.status === 404) {
        setLoginError('Oops! That email and pasword combination is not valid.')
      } else {
        throw error
      }
    } finally {
      setIsAuthLoading(false)
    }
  }, [credentials, login, navigate, setIsAuthLoading, setLoginError])

  return (
    <form className='login-form' onSubmit={handleSubmit}>
        {/* Email Field */}
        <FormInput
          aria-label='Email input'
          autoFocus
          label='Email'
          id='email-input'
          type='email'
          className='form-field'
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          required
          autoComplete='email'
          error={Boolean(loginError)}
          disabled={isAuthLoading}
          onFocus={() => setLoginError('')}
        />

        {/* Password Field */}
        <FormInput
          id='password-input'
          aria-label='Password input'
          type='password'
          label='Password'
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          required
          autoComplete='current-password'
          error={Boolean(loginError)}
          disabled={isAuthLoading}
          onFocus={() => setLoginError('')}
          minLength={6}
        />

        {/* Signup link */}
        <SignupLink />

        {/* Submit Button */}
        <Button
          className='button submit-btn'
          type='submit'
          aria-label='Submit login form'
          value={'Sign in'}
          loading={isAuthLoading}
        />
      </form>
  )
}

export default LoginForm
