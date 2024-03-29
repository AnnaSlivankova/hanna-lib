import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui'

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  ...restProps
}: ControlledInputProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <Checkbox {...restProps} checked={value} onChange={onChange} />
}

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onCheckedChange' | 'checked' | 'id'>
