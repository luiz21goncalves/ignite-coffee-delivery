import { Minus, Plus } from 'phosphor-react'

import { useCounter } from '../../context/CounterContext'

import * as S from './styles'

export function Counter() {
  const { amount, decrease, increase } = useCounter()

  return (
    <S.InputContainer>
      <S.InputButtonIcon type="button" onClick={decrease}>
        <Minus weight="bold" size={14} />
      </S.InputButtonIcon>

      <span>{amount}</span>

      <S.InputButtonIcon type="button" onClick={increase}>
        <Plus weight="bold" size={14} />
      </S.InputButtonIcon>
    </S.InputContainer>
  )
}
