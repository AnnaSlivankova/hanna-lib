import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ className, mt = '36px', style, ...rest }, ref) => {
    const classes = clsx(className, s.container)
    const styles: CSSProperties = { marginTop: mt, ...style }

    return <div className={classes} style={styles} ref={ref} {...rest} />
  }
)

export type PageProps = ComponentPropsWithoutRef<'div'> & {
  mt?: CSSProperties['marginTop']
}
