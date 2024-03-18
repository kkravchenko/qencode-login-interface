import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Skeleton, Logo, H } from '../../shared'
import ResetPasswordForm from './ResetPasswordForm'
import useHealthCheck from '../../../hooks/healthCheck'

export const ResetPassword = () => {
  const response = useHealthCheck()
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reset password | Qencode</title>
        <meta
          name='description'
          content='Qencode Front-End Test: Reset password'
        ></meta>
      </Helmet>

      <Skeleton>
        <Logo />
        <H text='Create new Password?' />
        {!response ? (
          <div>Qencode auth host does not work</div>
        ) : (
          <ResetPasswordForm />
        )}
      </Skeleton>
    </HelmetProvider>
  )
}
