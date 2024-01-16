import s from './delete-dialog.module.scss'

import { Dialog, DialogProps } from '@/components/ui'

export const DeleteDialog = ({ deletedItemTitle, dialogTitle, ...rest }: Props) => {
  return (
    <Dialog {...rest} title={dialogTitle}>
      <div className={s.content}>
        <p>
          Do you really want to delete <strong>{deletedItemTitle}</strong>
        </p>
        <p>All information will be deleted</p>
      </div>
    </Dialog>
  )
}

type Props = Pick<DialogProps, 'onCancel' | 'onConfirm' | 'onOpenChange' | 'open'> & {
  deletedItemTitle: string
  dialogTitle: string
}
