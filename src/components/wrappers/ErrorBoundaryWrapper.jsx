import { ErrorBoundary } from 'react-error-boundary'

export const ErrorBoundaryWrapper = ({ children }) => (
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    {children}
  </ErrorBoundary>
)
