import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
  name: string
}

export const Input = (props: InputProps) => {
  const { isOptional = false, name, ...attrs } = props

  const { register } = useFormContext()

  return (
    <S.InputContainer>
      <S.Input {...attrs} {...register(name)} />

      {isOptional && <S.InputHelperText>Opcional</S.InputHelperText>}
    </S.InputContainer>
  )
}
