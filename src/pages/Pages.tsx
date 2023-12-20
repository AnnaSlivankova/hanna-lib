import { Route, Routes } from 'react-router-dom'

import { PATH } from '../common/constants'
import { Login, Registration } from '../modules/auth-module'
import { RestorePassword } from '../modules/auth-module/components/restore-password/RestorePassword.tsx'
import { MainPage } from '../modules/client-module'
import { AboutUsPage } from '../modules/client-module/components/about-us-page/AboutUsPage.tsx'
import { BookClubPage } from '../modules/client-module/components/book-club-page/BookClubPage.tsx'
import { BookPage } from '../modules/client-module/components/catalog-page/book-page/BookPage.tsx'
import { CatalogPage } from '../modules/client-module/components/catalog-page/CatalogPage.tsx'
import { ContactsPage } from '../modules/client-module/components/contacts-page/ContactsPage.tsx'
import { PodcastPage } from '../modules/client-module/components/podcast-page/PodcastPage.tsx'
import { UserPage } from '../modules/client-module/components/user-page/UserPage.tsx'

import { MainLayout } from './layouts/MainLayout.tsx'

export const Pages = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.RESTORE_PASSWORD} element={<RestorePassword />} />
        <Route path={PATH.USER} element={<UserPage />} />
        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.CATALOG} element={<CatalogPage />} />
        <Route path={`${PATH.CATALOG}/:bookId`} element={<BookPage />} />
        <Route path={PATH.BOOK_CLUB} element={<BookClubPage />} />
        <Route path={PATH.PODCAST} element={<PodcastPage />} />
        <Route path={PATH.ABOUT_US} element={<AboutUsPage />} />
        <Route path={PATH.CONTACTS} element={<ContactsPage />} />
      </Route>
    </Routes>
  )
}
