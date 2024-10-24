import { useContext } from 'react'

// Context
import { ErrorMsgContext } from '../context/ErrorMsgContext'

export function useErrorMsg () {
  const context = useContext(ErrorMsgContext)
  if (!context) {
    throw new Error('useLoginError must be used within an LoginErrorContext')
  }
  return context
}
