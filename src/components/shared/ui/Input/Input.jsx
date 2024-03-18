import { useState } from 'react'

export const Input = ({
  type,
  value,
  label,
  error,
  placeholder,
  handleOnChange,
  handleOnBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <label>
      {label && <span>{label}</span>}
      <input
        type={showPassword ? 'text' : type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e)}
        onBlur={(e) => handleOnBlur(e)}
        className={!!error ? 'error' : ''}
      />
      {type === 'password' && (
        <button
          className={`show-password ${showPassword ? 'active' : ''}`}
          onClick={handleShowPassword}
        ></button>
      )}
      {!!error && <div className='error'>{error}</div>}
    </label>
  )
}
