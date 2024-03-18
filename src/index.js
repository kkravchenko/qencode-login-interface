import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GoogleAuthWrapper, ErrorBoundaryWrapper } from './components'
import './static/css/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GoogleAuthWrapper>
      <ErrorBoundaryWrapper>
        <App />
      </ErrorBoundaryWrapper>
    </GoogleAuthWrapper>
  </React.StrictMode>
)
