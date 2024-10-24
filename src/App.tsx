import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

// Error Boundary
import ErrorBoundary from './components/common/ErrorBoundary'

// Routes
import Routes from './routes/AppRoutes'

// Styles
import './styles/App.css'

// Context
import { AuthProvider } from './context/AuthContext'
import { ErrorMsgProvider } from './context/ErrorMsgContext'
import { EventsContextProvider } from './context/EventsContext'

// Clients
const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ErrorMsgProvider>
          <AuthProvider>
            <EventsContextProvider>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </EventsContextProvider>
          </AuthProvider>
        </ErrorMsgProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
