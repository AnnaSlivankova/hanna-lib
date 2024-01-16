import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './book-dialog.module.scss'

import { Dialog, DialogProps } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'
import { Book } from '@/services/crm/crm.service'

const schema = z.object({
  authorFirstName: z.string().min(2),
  authorLastName: z.string().min(2),
  imageUrl: z.string().min(1),
  readingPeriod: z.string().min(1),
  category: z.string().min(1),
  title: z.string().min(1),
})

export const BookDialog = ({
  dialogTitle,
  defaultValues = {
    title: '',
    category: '',
    readingPeriod: 0,
    imageUrl: '',
    authorFirstName: '',
    authorLastName: '',
  },
  onConfirm,
  onCancel,
  ...rest
}: Props) => {
  const { control, handleSubmit, reset } = useForm<FormType>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const onSubmit = handleSubmit(data => {
    const newData: Book = {
      title: data.title,
      tags: [{ name: data.category }],
      price: +data.readingPeriod,
      imageUrl: data.imageUrl,
      author: { firstName: data.authorFirstName, lastName: data.authorLastName },
    }

    onConfirm(newData)
    rest.onOpenChange?.(false)
    reset()
  })

  const handleCancel = () => {
    reset()
    onCancel?.()
  }

  return (
    <Dialog
      {...rest}
      title={dialogTitle}
      onConfirm={onSubmit}
      onCancel={handleCancel}
      confirmText={'save'}
    >
      <form onSubmit={onSubmit} className={s.content}>
        <ControlledTextField control={control} name={'authorFirstName'} label={'authorFirstName'} />
        <ControlledTextField control={control} name={'authorLastName'} label={'authorLastName'} />
        <ControlledTextField control={control} name={'imageUrl'} label={'imageUrl'} />
        <ControlledTextField control={control} name={'readingPeriod'} label={'readingPeriod'} />
        <ControlledTextField control={control} name={'category'} label={'category'} />
        <ControlledTextField control={control} name={'title'} label={'title'} />
      </form>
    </Dialog>
  )
}

export type FormType = z.infer<typeof schema>

type Props = Pick<DialogProps, 'onCancel' | 'onOpenChange' | 'open'> & {
  dialogTitle: string
  defaultValues?: FormType | {}
  onConfirm: (data: Book) => void
}
