import { FC } from 'react'

import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import s from './navbar.module.scss'

import { PATH } from '@/common/constants'

const navbarData = [
  { id: '0', title: 'Каталог', path: PATH.CATALOG },
  { id: '1', title: 'book club', path: PATH.BOOK_CLUB },
  { id: '2', title: 'podcast', path: PATH.PODCAST },
  { id: '3', title: 'О нас', path: PATH.ABOUT_US },
  { id: '4', title: 'Контакты', path: PATH.CONTACTS },
]

export const Navbar: FC<NavbarProps> = ({ vertical = false }) => {
  const classNames = {
    root: clsx(vertical ? s.vertical : s.horizontal),
  }

  return (
    <nav className={s.root}>
      <ul className={classNames.root}>
        {navbarData.map(link => (
          <li key={link.id}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? s.active : '')}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

type NavbarProps = {
  vertical?: boolean
}
