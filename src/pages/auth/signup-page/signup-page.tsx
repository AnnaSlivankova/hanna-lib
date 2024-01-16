import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common/constants'
import { Signup } from '@/components/auth/signup'
import { Page } from '@/components/ui'
import { useSignupMutation } from '@/services/auth/auth.service'
import { UserDataFetch } from '@/services/auth/auth.types'

export const SignupPage = () => {
  const [signUp] = useSignupMutation()
  const navigate = useNavigate()

  const handleSignIn = async (data: UserDataFetch) => {
    try {
      await signUp(data).unwrap()
      toast.success('you have been registered')
      console.log(data)
      navigate(PATH.MAIN)
    } catch (e: any) {
      console.log(e.data.error)
      toast.error(e?.data?.error ?? 'an signup error')
    }
  }

  return (
    <Page>
      <Signup onSubmit={handleSignIn} />
    </Page>
  )
}
