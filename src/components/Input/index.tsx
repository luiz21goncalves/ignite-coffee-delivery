import { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
}

export const Input = forwardRef((props: InputProps, _) => {
  const { isOptional = false, ...attrs } = props

  return (
    <S.InputContainer>
      <S.Input {...attrs} />

      {isOptional && <S.InputHelperText>Opcional</S.InputHelperText>}
    </S.InputContainer>
  )
})

Input.displayName = 'Input'
