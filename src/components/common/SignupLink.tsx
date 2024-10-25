import { memo } from 'react'

// Styles
import '../../styles/components/SignupLink.css'

function SignupLink ({inHeader}: {inHeader?: boolean}) {
  return (
    <p className={`signup-link${inHeader ? ' in-header' : ''}`}>
      Don’t have account? <a className='link' href={'/signup'}>sign up</a>
    </p>
  )
}

export default memo(SignupLink)
