import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Skeleton, Logo, H } from '../../shared'
import ForgotPassowrdForm from './ForgotPasswordForm'
import useHealthCheck from '../../../hooks/healthCheck'

export const ForgotPassword = () => {
  const response = useHealthCheck()
  return (
    <HelmetProvider>
      <Helmet>
        <title>Forgot password | Qencode</title>
        <meta
          name='description'
          content='Qencode Front-End Test: Forgot password'
        ></meta>
      </Helmet>

      <Skeleton>
        <Logo />
        <H text='Forgot Password?' />
        {!response ? (
          <div>Qencode auth host does not work</div>
        ) : (
          <ForgotPassowrdForm />
        )}
      </Skeleton>
    </HelmetProvider>
  )
}
