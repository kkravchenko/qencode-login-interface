import { Logo, MenuList } from '../../shared'

export const Header = () => {
  const menu = [
    { name: 'Home', href: '/', breakline: true },
    { name: 'Login', href: '/login' },
    { name: 'Forgot Password', href: 'forgot-password' },
    { name: 'Refresh Token', href: 'refresh-token', breakline: true },
    { name: 'Protected Page', href: '/protected' },
  ]

  return (
    <header>
      <Logo />
      <MenuList menu={menu} />
    </header>
  )
}
