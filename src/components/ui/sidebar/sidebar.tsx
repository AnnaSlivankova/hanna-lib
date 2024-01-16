import { FC } from 'react'

import clsx from 'clsx'
import {
  Info,
  KeyRound,
  Library,
  LocateFixed,
  LogIn,
  LogOut,
  PenSquare,
  Podcast,
  ShoppingBasket,
  UserRoundCog,
  Users,
  X as Close,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

import s from './sidebar.module.scss'

import { PATH } from '@/common/constants'
import { Button } from '@/components/ui'

const sidebarData = [
  { id: '0', title: 'Каталог', path: PATH.CATALOG, icon: <Library />, status: 'all' },
  { id: '1', title: 'book club', path: PATH.BOOK_CLUB, icon: <Users />, status: 'all' },
  { id: '2', title: 'podcast', path: PATH.PODCAST, icon: <Podcast />, status: 'all' },
  { id: '3', title: 'О нас', path: PATH.ABOUT_US, icon: <Info />, status: 'all' },
  { id: '4', title: 'Контакты', path: PATH.CONTACTS, icon: <LocateFixed />, status: 'all' },

  { id: '5', title: 'Войти', path: PATH.LOGIN, icon: <LogIn />, status: 'notLoggedIn' },
  {
    id: '6',
    title: 'Зарегестрироваться',
    path: PATH.REGISTRATION,
    icon: <PenSquare />,
    status: 'notLoggedIn',
  },
  { id: '7', title: 'Мой кабинет', path: PATH.USER, icon: <KeyRound />, status: 'loggedIn' },
  { id: '8', title: 'Моя корзина', path: PATH.USER, icon: <ShoppingBasket />, status: 'loggedIn' },
]

export const Sidebar: FC<PropsType> = ({ isOpen, handleClose }) => {
  // const isLogin = false
  const isLogin = true
  // const isAdmin = false
  const isAdmin = true
  const classNames = clsx(s.root, isOpen && s.open)

  const onLogoutHandler = () => {
    alert('you have been successfully logout')
    handleClose()
  }

  return (
    <>
      {isOpen && <div className={s.background} onClick={handleClose} />}

      <aside className={classNames}>
        <nav className={s.nav}>
          <Button variant={'icon'} onClick={handleClose}>
            <Close className={s.close} />
          </Button>
          <ul>
            {sidebarData.map(el => {
              if (el.status === 'all')
                return (
                  <li key={el.id}>
                    {el.icon}
                    <NavLink
                      to={el.path}
                      className={({ isActive }) => (isActive ? s.active : '')}
                      onClick={handleClose}
                    >
                      {el.title}
                    </NavLink>
                  </li>
                )
            })}
            {sidebarData.map(el => {
              if (el.status === 'loggedIn' && isLogin)
                return (
                  <li key={el.id}>
                    {el.icon}
                    <NavLink
                      to={el.path}
                      className={({ isActive }) => (isActive ? s.active : '')}
                      onClick={handleClose}
                    >
                      {el.title}
                    </NavLink>
                  </li>
                )
              else if (el.status === 'notLoggedIn' && !isLogin)
                return (
                  <li key={el.id}>
                    {el.icon}
                    <NavLink
                      to={el.path}
                      className={({ isActive }) => (isActive ? s.active : '')}
                      onClick={handleClose}
                    >
                      {el.title}
                    </NavLink>
                  </li>
                )
            })}
            {isAdmin && (
              <li>
                <UserRoundCog />
                <NavLink
                  to={PATH.CRM}
                  className={({ isActive }) => (isActive ? s.active : '')}
                  onClick={handleClose}
                >
                  CRM
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className={s.logoutBtn}>
          {isLogin && (
            <Button variant={'tertiary'} onClick={onLogoutHandler}>
              <LogOut /> Выйти
            </Button>
          )}
        </div>
      </aside>
    </>
  )
}

type PropsType = {
  isOpen: boolean
  handleClose: () => void
}
