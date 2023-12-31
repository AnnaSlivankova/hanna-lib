import { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../common/components'
import { Sidebar } from '../../common/components/sidebar/Sidebar.tsx'

import s from './MainLayout.module.scss'

export const MainLayout = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden')
    !open && (document.body.style.overflow = 'unset')
  }, [open]) // отключает прокрутку при открытом меню

  return (
    <div className={s.container}>
      <Header handleOpen={handleOpen} />
      <Sidebar handleClose={handleClose} open={open} />
      <div className={s.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
