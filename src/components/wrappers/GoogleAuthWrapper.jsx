import { GoogleOAuthProvider } from '@react-oauth/google'

export const GoogleAuthWrapper = ({ children }) => (
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    {children}
  </GoogleOAuthProvider>
)
