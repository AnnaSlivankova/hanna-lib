import s from './AuthWrapper.module.scss'
import { ReactNode } from 'react'

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
