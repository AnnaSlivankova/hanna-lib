import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

const ButtonPolymorph = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: any) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    rounded,
    variant = 'primary',
    color = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        className,
        rounded && s.rounded
      )}
      {...rest}
      ref={ref}
    />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonPolymorph>

export type ButtonProps<T extends ElementType = 'button'> = {
  color?: 'primary' | 'secondary' | 'tertiary'
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  rounded?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>
