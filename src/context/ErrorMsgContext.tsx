import React, { createContext, useMemo, useState } from 'react'

type ErrorMsgContextType = {
  loginError: string
  setLoginError: React.Dispatch<React.SetStateAction<string>>
  newEventError: string
  setNewEventError: React.Dispatch<React.SetStateAction<string>>
}

export const ErrorMsgContext = createContext<ErrorMsgContextType | undefined>(undefined)

export function ErrorMsgProvider ({ children }: { children: React.ReactNode }) {
  const [loginError, setLoginError] = useState<string>('')
  const [newEventError, setNewEventError] = useState<string>('')

  const contextValue = useMemo(() => (
    {
      loginError,
      setLoginError,
      newEventError,
      setNewEventError,
    }
  ), [
    loginError,
    setLoginError,
    newEventError,
    setNewEventError
  ])

  return (
    <ErrorMsgContext.Provider value={contextValue}>
      {children}
    </ErrorMsgContext.Provider>
  )
}
