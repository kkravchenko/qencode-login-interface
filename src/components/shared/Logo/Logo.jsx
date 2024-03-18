import logoImg from '../../../static/image/qencode.svg'

export const Logo = () => (
  <div className='logo'>
    <img src={logoImg} loading='lazy' width={178} height={32} alt='Qencode' />
  </div>
)
