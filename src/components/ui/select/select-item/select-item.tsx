import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from '../select.module.scss'

import { Typography } from '@/components/ui'
import { SelectVariant } from '@/components/ui/select/select'

type SelectItemProps = {
  variant?: SelectVariant
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ variant = 'default', children, className, ...restProps }, ref): JSX.Element => {
    const typographyVariant = variant === 'default' ? 'body1' : 'body2'

    const classNames = {
      selectItem: clsx(s[`${variant}Paddings`], s.selectItem, className),
      text: s.text,
    }

    return (
      <RadixSelect.Item ref={ref} className={classNames.selectItem} {...restProps}>
        <RadixSelect.ItemText>
          <Typography className={classNames.text} variant={typographyVariant}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
