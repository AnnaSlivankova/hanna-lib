import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import { SelectItem } from './select-item/select-item'
import s from './select.module.scss'

import { Typography } from '@/components/ui'

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    {
      options,
      placeholder = 'Select value...',
      variant = 'default',
      label,
      value,
      onValueChange,
      fullWidth,
      disabled,
      className,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const typographyVariant = variant === 'default' ? 'body1' : 'body2'

    const classNames = {
      label: clsx(s.text, disabled && s.disabled),
      trigger: clsx(
        s.trigger,
        s[variant],
        s[`${variant}Paddings`],
        fullWidth && s.fullWidth,
        className
      ),
      content: clsx(s.content),
      icon: s.icon,
    }

    return (
      <RadixSelect.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={restProps.required}
      >
        {label && (
          <Typography className={classNames.label} variant={typographyVariant} as="label">
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger ref={ref} className={classNames.trigger} aria-label="select">
          <Typography className={s.text} variant={typographyVariant}>
            <RadixSelect.Value className={s.value} placeholder={placeholder} />
          </Typography>
          <RadixSelect.Icon className={s.icon}>
            <ChevronDown size={1.6} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content ref={ref} className={classNames.content} position="popper">
            <RadixSelect.Viewport>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value} variant={variant}>
                  {option.title}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)

export type OptionType = {
  value: string
  title: string
}

export type SelectVariant = 'default' | 'pagination'

export type SelectProps = {
  options: OptionType[]
  variant?: SelectVariant
  placeholder?: ReactNode
  label?: string
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
