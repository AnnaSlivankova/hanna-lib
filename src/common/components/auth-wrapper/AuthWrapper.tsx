import { ReactNode } from 'react'

import s from './AuthWrapper.module.scss'

type PropsType = {
  children: ReactNode
  title: string
}

export const AuthWrapper = ({ children, title }: PropsType) => (
  <div className={s.container}>
    <h2>{title}</h2>
    {children}
  </div>
)
