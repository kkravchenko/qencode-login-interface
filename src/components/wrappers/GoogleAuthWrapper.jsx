import { GoogleOAuthProvider } from '@react-oauth/google'

export const GoogleAuthWrapper = ({ children }) => (
  <GoogleOAuthProvider clientId='466237624909-pt827s5sr1aacrksv2d5v6d157r284u3'>
    {children}
  </GoogleOAuthProvider>
)
