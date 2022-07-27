import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

import * as S from './styles'

export function Counter() {
  const [amount, setAmount] = useState(1)

  function handleIncremente() {
    setAmount((prevState) => prevState + 1)
  }

  function handleDecremente() {
    setAmount((prevState) => {
      if (prevState > 1) {
        return prevState - 1
      }

      return prevState
    })
  }

  return (
    <S.InputContainer>
      <S.InputButtonIcon type="button" onClick={handleDecremente}>
        <Minus weight="bold" size={14} />
      </S.InputButtonIcon>

      <span>{amount}</span>

      <S.InputButtonIcon type="button" onClick={handleIncremente}>
        <Plus weight="bold" size={14} />
      </S.InputButtonIcon>
    </S.InputContainer>
  )
}
