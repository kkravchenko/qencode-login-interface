import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Skeleton, Logo, H, Or } from '../../shared'
import { SocialLogin } from '../..'
import useHealthCheck from '../../../hooks/healthCheck'
import LoginForm from './LoginForm'

export const Login = () => {
  const response = useHealthCheck()
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login to Qencode</title>
        <meta name='description' content='Log in to your account'></meta>
      </Helmet>
      <Skeleton>
        <Logo />
        <H text='Log in to your account' />
        {!response ? (
          <div>Qencode auth host does not work</div>
        ) : (
          <>
            <SocialLogin />
            <Or />
            <LoginForm />
          </>
        )}
      </Skeleton>
    </HelmetProvider>
  )
}
