import s from './Header.module.scss'
import sprite from '../../../assets/sprite.svg'
import { Button } from '../button/Button.tsx'
import { LoadingLine } from '../loading-line/LoadingLine.tsx'
import { PATH, TITLES } from '../../constants'
import { NavLink } from 'react-router-dom'
import * as React from 'react'

export const Header: React.FC<PropsType> = ({ handleOpen }) => {
  const isLoading = false
  const isLogin = false

  return (
    <header className={s.container}>
      <NavLink to={PATH.MAIN}>
        <svg className={s.logo}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
      </NavLink>

      <svg className={s.menuBtn} onClick={handleOpen}>
        <use xlinkHref={`${sprite}#menu`} />
      </svg>

      <nav>
        <ul>
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
        </ul>
      </nav>

      {isLogin ? (
        <div className={s.btnRightContainer}>
          <NavLink to={PATH.USER}>
            <svg className={s.userBtn}>
              <use xlinkHref={`${sprite}#user-button`} />
            </svg>
          </NavLink>

          <Button className={s.outlinedBtn} variant="tertiary">
            {TITLES.LOGOUT}
          </Button>
        </div>
      ) : (
        <div className={s.btnRightContainer}>
          <NavLink to={PATH.REGISTRATION}>
            <Button className={s.linkBtn} variant="tertiary">
              {TITLES.REGISTRATION}
            </Button>
          </NavLink>
          <NavLink to={PATH.LOGIN}>
            <Button className={s.outlinedBtn} variant="tertiary">
              {TITLES.LOGIN}
            </Button>
          </NavLink>
        </div>
      )}
      {isLoading && <LoadingLine />}
    </header>
  )
}

type PropsType = {
  handleOpen: () => void
}

// import s from './Header.module.scss'
// import sprite from '../../../assets/sprite.svg'
// import { Button } from '../button/Button.tsx'
// import { LoadingLine } from '../loading-line/LoadingLine.tsx'
// import { PATH, TITLES } from '../../constants'
// import { NavLink } from 'react-router-dom'
// import * as React from 'react'
//
// export const Header: React.FC<PropsType> = ({ handleOpen }) => {
//   const isLoading = false
//   const isLogin = false
//
//   return (
//     <header className={s.container}>
//       <div className={s.wrapper}>
//         <NavLink to={PATH.MAIN}>
//           <svg className={s.logo}>
//             <use xlinkHref={`${sprite}#logo`} />
//           </svg>
//         </NavLink>
//
//         <svg className={s.menuBtn} onClick={handleOpen}>
//           <use xlinkHref={`${sprite}#menu`} />
//         </svg>
//
//         <nav>
//           <ul>
//             <li>
//               <NavLink to={PATH.CATALOG}>Каталог</NavLink>
//             </li>
//             <li>
//               <NavLink to={PATH.BOOK_CLUB}>book club</NavLink>
//             </li>
//             <li>
//               <NavLink to={PATH.PODCAST}>podcast</NavLink>
//             </li>
//             <li>
//               <NavLink to={PATH.ABOUT_US}>О нас</NavLink>
//             </li>
//             <li>
//               <NavLink to={PATH.CONTACTS}>Контакты</NavLink>
//             </li>
//           </ul>
//         </nav>
//
//         {isLogin ? (
//           <div className={s.btnRightContainer}>
//             <NavLink to={PATH.USER}>
//               <svg className={s.userBtn}>
//                 <use xlinkHref={`${sprite}#user-button`} />
//               </svg>
//             </NavLink>
//
//             <Button className={s.outlinedBtn} variant="tertiary">
//               {TITLES.LOGOUT}
//             </Button>
//           </div>
//         ) : (
//           <div className={s.btnRightContainer}>
//             <NavLink to={PATH.REGISTRATION}>
//               <Button className={s.linkBtn} variant="tertiary">
//                 {TITLES.REGISTRATION}
//               </Button>
//             </NavLink>
//             <NavLink to={PATH.LOGIN}>
//               <Button className={s.outlinedBtn} variant="tertiary">
//                 {TITLES.LOGIN}
//               </Button>
//             </NavLink>
//           </div>
//         )}
//       </div>
//       {isLoading && <LoadingLine />}
//     </header>
//   )
// }
//
// type PropsType = {
//   handleOpen: () => void
// }
