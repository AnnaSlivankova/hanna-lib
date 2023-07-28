import s from './Header.module.scss'
import sprite from '../../../assets/sprite.svg'
import { Button } from '../button/Button.tsx'
import { LoadingLine } from '../loading-line/LoadingLine.tsx'

export const Header = () => {
  const isLoading = false
  const isLogin = false

  return (
    <header className={s.container}>
      <svg className={s.logo}>
        <use xlinkHref={`${sprite}#logo`} />
      </svg>

      <svg className={s.burgerButton}>
        <use xlinkHref={`${sprite}#burger`} />
      </svg>

      <nav>
        <ul>
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

      {isLogin ? (
        <div className={s.btnRightContainer}>
          <svg className={s.userBtn}>
            <use xlinkHref={`${sprite}#user-button`} />
          </svg>
          <Button className={s.outlinedBtn} variant="tertiary">
            выйти
          </Button>
        </div>
      ) : (
        <div className={s.btnRightContainer}>
          <Button className={s.linkBtn} variant="tertiary">
            регистрация
          </Button>
          <Button className={s.outlinedBtn} variant="tertiary">
            войти
          </Button>
        </div>
      )}
      {isLoading && <LoadingLine />}
    </header>
  )
}
