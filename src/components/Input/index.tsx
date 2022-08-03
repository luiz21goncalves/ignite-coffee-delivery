import { useState, FocusEvent, InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
}

export function Input(props: InputProps) {
  const { isOptional = false, ...attrs } = props

  const [isFilled, setIsFilled] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    setIsFilled(Boolean(event.target.value))
  }

  return (
    <S.InputContainer isFilled={isFilled} isFocused={isFocused}>
      <S.Input onFocus={handleFocus} onBlur={handleBlur} {...attrs} />

      {isOptional && <S.InputHelperText>Opcional</S.InputHelperText>}
    </S.InputContainer>
  )
}
