import { useState } from 'react'
import { Link } from 'react-router-dom'

export const MenuList = ({ menu }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`gamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      ></div>
      <ul className={`menu ${open ? 'active' : ''}`}>
        {menu.length &&
          menu.map((m) => (
            <li key={m.name} className={m.breakline ? 'breakline' : ''}>
              <Link to={m.href}>{m.name}</Link>
            </li>
          ))}
      </ul>
    </>
  )
}
