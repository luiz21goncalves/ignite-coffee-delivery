import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
}

export function Input(props: InputProps) {
  const { isOptional = false, ...attrs } = props

  return (
    <S.InputContainer>
      <S.Input {...attrs} />

      {isOptional && <S.InputHelperText>Opcional</S.InputHelperText>}
    </S.InputContainer>
  )
}
