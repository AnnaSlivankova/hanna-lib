import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './restore-password.module.scss'

import { Button, Card, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'

const schema = z.object({
  email: z
    .string()
    .regex(
      /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
      'Email должен содержать'
    )
    .email('Invalid email address')
    .min(1, 'Enter email'),
})

export const RestorePassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.card}>
      <Typography variant={'h2'} className={s.title}>
        Восстановление пароля
      </Typography>
      <form onSubmit={handleSubmit(props.onSubmit)} className={s.form}>
        <ControlledTextField control={control} name={'email'} label={'email'} />
        <Button type={'submit'}>Восстановаить</Button>
      </form>
    </Card>
  )
}

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
