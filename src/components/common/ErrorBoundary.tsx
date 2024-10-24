import * as React from 'react'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary