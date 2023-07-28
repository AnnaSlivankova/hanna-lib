import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import { PATH } from '../common/constants'
import { Login, Registration } from '../modules/auth-module'
import { MainPage } from '../modules/client-module'

export const Pages = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
      </Route>
    </Routes>
  )
}
