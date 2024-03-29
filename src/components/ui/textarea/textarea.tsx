import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './textarea.module.scss'

import { Label, Typography } from '@/components/ui'
import { useGetId } from '@/hooks'

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const Textarea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, errorMessage, id, label, onChange, onValueChange, ...rest }, ref) => {
    const textareaId = useGetId(id)
    const showError = !!errorMessage && errorMessage.length > 0

    function handleInputValueChanged(e: ChangeEvent<HTMLTextAreaElement>) {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      input: clsx(s.textarea, showError && s.error),
      label: s.label,
      labelBox: s.labelBox,
      root: clsx(s.box, className),
    }

    return (
      <div className={classNames.root}>
        {label && <Label htmlFor={textareaId} label={label} />}
        <textarea
          className={classNames.input}
          id={textareaId}
          onChange={handleInputValueChanged}
          ref={ref}
          {...rest}
        />
        {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </div>
    )
  }
)

export type TextareaProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>
