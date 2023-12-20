import { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthWrapper, Button } from '../../../../common/components'
import { Input } from '../../../../common/components/input/Input.tsx'
import { TITLES } from '../../../../common/constants'

import s from './RestorePassword.module.scss'

export const RestorePassword = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {} as RestoreFormType,
  })

  const onSubmit: SubmitHandler<RestoreFormType> = data => {
    console.log(`you have been restored your password on: ${data.password}`)
  }

  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | ${TITLES.RESTORE_PASSWORD}`
  }, [])

  return (
    <>
      <AuthWrapper title={TITLES.RESTORE_PASSWORD}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="password" type="password" placeholder="Новый пароль" register={register} />
          <Input
            name="password-rep"
            placeholder="Повторите пароль"
            type="password"
            register={register}
          />
          <Button type="submit" variant="tertiary">
            восстановить
          </Button>
        </form>
      </AuthWrapper>
    </>
  )
}

type RestoreFormType = {
  password: string
}
