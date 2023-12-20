import * as Dialog from '@radix-ui/react-dialog'
import { X, Menu } from 'lucide-react'

import s from './SideMenu.module.scss'

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={s.green}>
        <Menu size={40} color={'var(--color-text-tertriary)'} />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={s.DialogOverlay} />
      <Dialog.Content className={s.DialogContent}>
        <Dialog.Title className={s.DialogTitle}>Edit profile</Dialog.Title>
        <Dialog.Description className={s.DialogDescription}>
          Make changes to your profile here. Click save when youre done.
        </Dialog.Description>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="name">
            Name
          </label>
          <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="username">
            Username
          </label>
          <input className={s.Input} id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className={s.violet}>Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className={s.IconButton} aria-label="Close">
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogDemo
