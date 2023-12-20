import { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { AuthWrapper, Button } from '../../../../common/components'
import { Input } from '../../../../common/components/input/Input.tsx'
import { PATH, TITLES } from '../../../../common/constants'

export const Login = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {} as LoginFormType,
  })

  const onSubmit: SubmitHandler<LoginFormType> = data => {
    console.log(`you have been logged in with email: ${data.email}, password: ${data.password}`)
  }

  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | ${TITLES.LOGIN}`
  }, [])

  return (
    <>
      <AuthWrapper title={TITLES.LOGIN}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="email" placeholder="Ваш email" register={register} />
          <Input name="password" placeholder="Ваш пароль" register={register} />
          <Button type="submit" variant="tertiary">
            войти
          </Button>
        </form>
        <span>Забыли пароль?</span>
        <NavLink to={PATH.RESTORE_PASSWORD}>{TITLES.RESTORE_PASSWORD}</NavLink>
      </AuthWrapper>
    </>
  )
}
type LoginFormType = {
  email: string
  password: string
}
