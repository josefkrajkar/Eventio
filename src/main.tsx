import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// App
import App from './App.tsx'

// Styles
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
