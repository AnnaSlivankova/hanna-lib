import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import sprite from '../../../assets/sprite.svg'
import { PATH, TITLES } from '../../constants'

import s from './Sidebar.module.scss'

type PropsType = {
  open: boolean
  handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const isLogin = false
  // const isLogin = true

  const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')

  return (
    <>
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose} aria-label="close sidebar">
          <svg>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>

        <nav className={s.nav}>
          <NavLink
            to={PATH.CATALOG}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#catalog`} />
            </svg>
            Каталог
          </NavLink>
          <NavLink
            to={PATH.BOOK_CLUB}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#bookclub`} />
            </svg>
            book club
          </NavLink>
          <NavLink
            to={PATH.PODCAST}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#podcast`} />
            </svg>
            podcast
          </NavLink>
          <NavLink
            to={PATH.ABOUT_US}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#info`} />
            </svg>
            О нас
          </NavLink>
          <NavLink
            to={PATH.CONTACTS}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#contacts`} />
            </svg>
            Контакты
          </NavLink>
          {!isLogin ? (
            <>
              <NavLink
                to={PATH.REGISTRATION}
                onClick={handleClose}
                className={({ isActive }) => (isActive ? s.active : '')}
              >
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#registration`} />
                </svg>
                {TITLES.REGISTRATION}
              </NavLink>
              <NavLink
                to={PATH.LOGIN}
                onClick={handleClose}
                className={({ isActive }) => (isActive ? s.active : '')}
              >
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#login`} />
                </svg>
                {TITLES.LOGIN}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={PATH.USER}
                onClick={handleClose}
                className={({ isActive }) => (isActive ? s.active : '')}
              >
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#user-button`} />
                </svg>
                {TITLES.USER_SHELF}
              </NavLink>
              <NavLink
                to={PATH.MAIN}
                onClick={handleClose}
                className={({ isActive }) => (isActive ? s.active : '')}
              >
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#logout`} />
                </svg>
                {TITLES.LOGOUT}
              </NavLink>
            </>
          )}
        </nav>
      </aside>
    </>
  )
}
