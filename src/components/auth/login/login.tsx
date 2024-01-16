import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './login.module.scss'

import { PATH } from '@/common/constants'
import { Button, Card, Typography } from '@/components/ui'
import { ControlledCheckbox, ControlledTextField } from '@/components/ui/controlled'

const schema = z.object({
  // email: z.string().email('Invalid email address').nonempty('Enter email'),
  email: z
    .string()
    .regex(
      /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
      'Email должен содержать'
    )
    .email('Invalid email address')
    .min(1, 'Enter email'),
  // password: z.string().nonempty('Enter password'),
  password: z.string().min(8, 'Enter password'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}

export const Login = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.card}>
      <Typography variant={'h2'} className={s.title}>
        Войти
      </Typography>
      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      <form onSubmit={handleSubmit(props.onSubmit)} className={s.form}>
        <ControlledTextField control={control} name={'email'} label={'email'} />
        <ControlledTextField
          control={control}
          name={'password'}
          label={'password'}
          type={'password'}
        />
        <ControlledCheckbox
          name={'rememberMe'}
          onChange={() => {}}
          control={control}
          label={'remember me'}
        />
        <Typography as={Link} to={PATH.RESTORE_PASSWORD} style={{ textAlign: 'end' }}>
          Забыли пароль?
        </Typography>
        <Button type={'submit'}>Войти</Button>
      </form>
      <Typography as={Link} to={PATH.REGISTRATION}>
        Еще не зарегестрированы?
      </Typography>
    </Card>
  )
}
