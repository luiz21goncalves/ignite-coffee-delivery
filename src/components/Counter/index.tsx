import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

type CounterProps = {
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function Counter(props: CounterProps) {
  const { amount, onDecrease, onIncrease } = props

  const isDisabledDecreaseButton = amount <= 1

  return (
    <S.InputContainer>
      <S.InputButtonIcon
        type="button"
        onClick={onDecrease}
        disabled={isDisabledDecreaseButton}
      >
        <Minus weight="bold" size={14} />
      </S.InputButtonIcon>

      <span>{amount}</span>

      <S.InputButtonIcon type="button" onClick={onIncrease}>
        <Plus weight="bold" size={14} />
      </S.InputButtonIcon>
    </S.InputContainer>
  )
}
