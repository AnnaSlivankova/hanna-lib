import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './signup.module.scss'

import { Button, Card, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z
    .string()
    .regex(
      /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,4}$/i,
      'Не валидный Email, проверьте поле'
    ),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z,а-я])(?=.*[A-Z,А-Я])(?=.*\W)(?!.* ).{8,16}$/,
      'Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.'
    ),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const Signup = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.card}>
      <Typography variant={'h1'} className={s.title}>
        Зарегестрироваться
      </Typography>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className={s.form}>
          <ControlledTextField control={control} name={'firstName'} label={'Имя'} />
          <ControlledTextField control={control} name={'lastName'} label={'Фамилия'} />
          <ControlledTextField control={control} name={'username'} label={'Email'} />
          <ControlledTextField
            control={control}
            name={'password'}
            label={'Пароль'}
            type={'password'}
          />
          <Button type={'submit'}>Зарегестрироваться</Button>
        </div>
      </form>
    </Card>
  )
}
