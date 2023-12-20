import s from './Input.module.scss'
import * as React from 'react'
import sprite from '../../../assets/sprite.svg'
import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

export const Input: React.FC<PropsType> = ({ name, placeholder, type, register }) => {
  const [showPassword, setShowPassword] = useState(false)
  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={s.wrapper}>
      {type === 'password' ? (
        <>
          <label htmlFor={`inp_${name}`}>{placeholder}</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id={`inp_${name}`}
            placeholder={placeholder}
            className={s.input_area}
            {...register(name)}
          />
          <svg className={s.eye_icon} onClick={showPasswordHandler}>
            {showPassword ? (
              <use xlinkHref={`${sprite}#eye-open`} />
            ) : (
              <use xlinkHref={`${sprite}#eye-closed`} />
            )}
          </svg>
        </>
      ) : (
        <>
          <label htmlFor={`inp_${name}`}>{placeholder}</label>
          <input
            type={type ? type : 'text'}
            id={`inp_${name}`}
            placeholder={placeholder}
            {...register(name)}
          />
        </>
      )}
    </div>
  )
}

type PropsType = {
  placeholder: string
  type?: InputTypes
  register: UseFormRegister<any>
  name: 'name' | 'password' | 'password-rep' | 'email' | 'surname' | 'sex' | 'dob' | 'phone'
}
type InputTypes = 'text' | 'date' | 'password' | 'email' | 'radio'
