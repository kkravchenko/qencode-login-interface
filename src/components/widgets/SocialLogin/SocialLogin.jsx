import { Button, GooleButton } from '../../shared'

export const SocialLogin = () => {
  const handleOnClick = (type) => {}

  return (
    <div className='social-login'>
      <GooleButton />
      {/* <Button type='google' handleOnClick={handleOnClick} /> */}
      <Button type='github' handleOnClick={handleOnClick} />
    </div>
  )
}
