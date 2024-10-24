import { memo } from 'react'

// Styles
import '../../styles/components/SignupLink.css'

function SignupLink ({inHeader, disabled}: {inHeader?: boolean, disabled?: boolean}) {
  return (
    <p className={`signup-link${inHeader ? ' in-header' : ''}`}>
      Don’t have account? {
        disabled
          ? <span className='link'>sign up</span>
          : <a className='link' href={'/signup'}>sign up</a>
      }
    </p>
  )
}

export default memo(SignupLink)
