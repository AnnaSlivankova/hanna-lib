import s from './PageWrapper.module.scss'
import { ReactNode } from 'react'
import * as React from 'react'
import sprite from '../../../assets/sprite.svg'

export const PageWrapper: React.FC<PropsType> = ({ children, pageTitle, svg }) => {
  return (
    <div className={s.container}>
      <div className={s.titleForm}>
        <svg className={s.icon}>
          <use xlinkHref={`${sprite}#${svg}`} />
        </svg>
        <h2>{pageTitle}</h2>
      </div>
      {children}
    </div>
  )
}

type PropsType = {
  children: ReactNode
  pageTitle: string
  svg: string
}
