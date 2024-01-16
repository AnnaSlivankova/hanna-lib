import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './layout.module.scss'

import { Header, LoadingLine } from '@/components/ui'

export const Layout = forwardRef<ElementRef<'div'>, Props>(({ children, ...rest }, ref) => {
  const showLoadingLine = false

  return (
    <div className={s.root} ref={ref} {...rest}>
      <Header />
      {showLoadingLine && <LoadingLine />}
      <main className={s.main}>{children}</main>
      <div style={{ color: 'pink' }}>footer</div>
    </div>
  )
})

type Props = ComponentPropsWithoutRef<'div'>
