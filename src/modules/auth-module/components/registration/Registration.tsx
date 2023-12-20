import { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { AuthWrapper, Button } from '../../../../common/components'
import { Input } from '../../../../common/components/input/Input.tsx'
import { PATH, TITLES } from '../../../../common/constants'

import s from './Registration.module.scss'

export const Registration = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {} as RegistrationFormType,
  })

  const onSubmit: SubmitHandler<RegistrationFormType> = data => {
    console.log(
      `you have been registered with email: ${data.email}, password: ${data.password}, dob: ${data.dob}, name: ${data.name}, surname: ${data.surname}, sex: ${data.sex}, phone: ${data.phone}`
    )
    console.log(data)
  }

  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | ${TITLES.REGISTRATION}`
  }, [])

  return (
    <>
      <AuthWrapper title={TITLES.REGISTRATION}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="name" placeholder="Ваше имя" register={register} />
          <Input name="phone" placeholder="Ваш телефон" register={register} />
          <Input name="email" placeholder="Ваш email" type="email" register={register} />
          <Input name="password" placeholder="Ваш пароль" type="password" register={register} />
          <Input
            name="password-rep"
            placeholder="Повторите пароль"
            type="password"
            register={register}
          />
          <Button type="submit" variant="tertiary">
            зарегестрироваться
          </Button>
        </form>
        <span>Уже зарегестрированы?</span>
        <NavLink to={PATH.LOGIN}>{TITLES.LOGIN}</NavLink>
      </AuthWrapper>
    </>
  )
}

export type RegistrationFormType = {
  name: string
  phone: string
  email: string
  password: string
}
