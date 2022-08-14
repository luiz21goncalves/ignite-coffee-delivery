import { Bank, CreditCard, Money } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'

import * as S from './styles'

const paymentMethods = [
  { label: 'Cartão de Crédito', Icon: CreditCard },
  { label: 'Cartão de Debito', Icon: Bank },
  { label: 'Dinheiro', Icon: Money },
]

export function PaymentMethod() {
  const [selectedButton, setSelectedButton] = useState('')
  const { 'purple-500': purple500 } = useTheme()

  function handleSelectMethod(key: string) {
    setSelectedButton(key)
  }

  return (
    <S.PaymentMethodContainer>
      {paymentMethods.map(({ Icon, label }) => {
        const isSelectedButton = selectedButton === label

        return (
          <S.PaymentMethodButton
            type="button"
            key={label}
            onClick={() => handleSelectMethod(label)}
            isSelected={isSelectedButton}
          >
            <Icon size={16} color={purple500} />
            {label}
          </S.PaymentMethodButton>
        )
      })}
    </S.PaymentMethodContainer>
  )
}
