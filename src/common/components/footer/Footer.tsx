import s from './Footer.module.scss'
import sprite from '../../../assets/sprite.svg'

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
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">book club</a>
            </li>
            <li>
              <a href="#">podcast</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.right}>
        <span className={s.right}>контакты</span>
        <p>annslivankova@gmail.com</p>
        <p>Минск, Беларусь</p>
        <div className={s.btnContainer}>
          <a href="https://www.facebook.com/">
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#telegram`} />
            </svg>
          </a>
          <a href="https://twitter.com/">
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#instagram`} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
