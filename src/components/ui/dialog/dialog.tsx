import s from './dialog.module.scss'

import { Button, Modal, ModalProps } from '@/components/ui'

export const Dialog = ({
  cancelText = 'Cancel',
  children,
  confirmText = 'Accept',
  onCancel,
  onConfirm,
  ...rest
}: DialogProps) => {
  return (
    <Modal {...rest}>
      {children}
      <div className={s.buttons}>
        <Button variant={'tertiary'} onClick={onConfirm}>
          {confirmText}
        </Button>
        <Button variant={'tertiary'} onClick={onCancel}>
          {cancelText}
        </Button>
      </div>
    </Modal>
  )
}

export type DialogProps = ModalProps & {
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
}
