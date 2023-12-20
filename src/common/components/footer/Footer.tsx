import { NavLink } from 'react-router-dom'

import sprite from '../../../assets/sprite.svg'
import { PATH } from '../../constants'

import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.left}>
        <svg className={s.logo}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
        <p>Copyright © 2023</p>
      </div>
      <div className={s.middle}>
        <span>Навигация</span>
        <nav>
          <ul>
            <li>
              <NavLink to={PATH.MAIN}>Главная</NavLink>
              {/*<a href="#">Главная</a>*/}
            </li>
            <li>
              <NavLink to={PATH.CATALOG}>Каталог</NavLink>
            </li>
            <li>
              <NavLink to={PATH.BOOK_CLUB}>book club</NavLink>
            </li>
            <li>
              <NavLink to={PATH.PODCAST}>podcast</NavLink>
            </li>
            <li>
              <NavLink to={PATH.ABOUT_US}>О нас</NavLink>
            </li>
            <li>
              <NavLink to={PATH.CONTACTS}>Контакты</NavLink>
            </li>
            {/*<li>*/}
            {/*  <NavLink to={PATH.LOGIN}>Войти</NavLink>*/}
            {/*</li>*/}
          </ul>
        </nav>
      </div>
      <div className={s.right}>
        <span className={s.right}>контакты</span>
        <p>annslivankova@gmail.com</p>
        <p>Минск, Беларусь</p>
        <div className={s.btnContainer}>
          <a
            href="https://www.telegram.com/"
            title="Перейти в telegram чат"
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="Ссылка на telegram"
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#telegram`} />
            </svg>
          </a>
          <a
            href="https://instagram.com/"
            title="Перейти на instagram страницу"
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="Ссылка на instagram"
          >
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#instagram`} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
