import s from './login-page.module.scss'

import { LoginRule } from '@/assets'
import { Login } from '@/components/auth/login'
import { Page } from '@/components/ui'

export const LoginPage = () => {
  return (
    // <Page className={s.root}>
    //   <div className={s.pic}>
    //     <LoginRule />
    //   </div>
    <Page>
      <Login onSubmit={() => {}} />
    </Page>
  )
}
