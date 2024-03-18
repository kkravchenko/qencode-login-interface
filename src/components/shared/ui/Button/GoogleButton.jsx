import { useGoogleLogin } from '@react-oauth/google'
import { Button } from './Button'

export const GooleButton = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  })

  return <Button type='google' handleOnClick={() => login()} />
}
