import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/auth'

export const AuthWrapper = ({ children }) => {
  const authed = useAuth()

  return authed === true ? children : <Navigate to='/login' replace />
}
