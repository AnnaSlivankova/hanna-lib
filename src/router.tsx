import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { PATH } from '@/common/constants'
import { Footer, Header, LoadingLine } from '@/components/ui'
import { LoginPage, RestorePasswordPage, SignupPage } from '@/pages/auth'
import { Crm } from '@/pages/crm'
import {
  AboutUsPage,
  BookClubPage,
  BookPage,
  CatalogPage,
  ContactsPage,
  MainPage,
  PodcastPage,
} from '@/pages/library'
import { NotFoundPage } from '@/pages/not-found-page'
import { UserCart, UserPage } from '@/pages/user'

const publicRoutes: RouteObject[] = [
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATH.REGISTRATION,
    element: <SignupPage />,
  },
  {
    path: PATH.RESTORE_PASSWORD,
    element: <RestorePasswordPage />,
  },
  {
    path: PATH.MAIN,
    element: <MainPage />,
  },
  {
    path: PATH.CATALOG,
    element: <CatalogPage />,
  },
  {
    path: `${PATH.CATALOG}/:id`,
    element: <BookPage />,
  },
  {
    path: PATH.BOOK_CLUB,
    element: <BookClubPage />,
  },
  {
    path: PATH.PODCAST,
    element: <PodcastPage />,
  },
  {
    path: PATH.ABOUT_US,
    element: <AboutUsPage />,
  },
  {
    path: PATH.CONTACTS,
    element: <ContactsPage />,
  },
  {
    path: PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.USER,
    element: <UserPage />,
  },
  {
    path: PATH.CART,
    element: <UserCart />,
  },
  {
    path: PATH.CRM,
    element: <Crm />,
  },
]

const AppLayout = () => {
  // const {data, isError} = useMeQuery()
  const data = []
  const isError = false

  // const [logout, {isLoading}] = useLogoutMutation()
  const logout = false
  const isLoading = false
  // const isLoading = true

  return (
    <>
      <Header />
      {isLoading && <LoadingLine />}
      <main
        style={{
          paddingTop: 'var(--header-height)',
          paddingInline: '24px',
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Navigate to={PATH.NOT_FOUND} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])
// const router = createBrowserRouter([
//   {
//     element: <PrivateRoutes />,
//     children: privateRoutes,
//   },
//   ...publicRoutes,
// ])

export const Router = () => {
  // const result = useGetAllAuthorsQuery()

  // console.log(result)

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true
  // const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.MAIN} />
}
