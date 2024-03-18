import { useGoogleLogin } from '@react-oauth/google'
import useUserStore from '../../../../store/userStore'
import { Button } from './Button'

export const GooleButton = () => {
  const setEmail = useUserStore((state) => state.setEmail)
  const login = useGoogleLogin({
    redirect_uri: process.env.REACT_APP_GITHUB_REDIRECT_URI,
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(process.env.REACT_APP_GOOGLE_AUTH_LINK, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      }).then((res) => res.json())

      setEmail(userInfo.email)
    },
  })

  return <Button type='google' handleOnClick={() => login()} />
}
