import { Footer, Header } from '../../common/components'
import { Outlet } from 'react-router-dom'
import s from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
