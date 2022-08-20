import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Counter } from '../../../../components/Counter'
import { COFFEE } from '../../../../constants/coffee'
import { formatMonetary } from '../../../../utils'

import * as S from './styles'

type CoffeeCardCheckoutProps = {
  coffeeId: number
  quantity: number
}

export function CoffeeCardCheckout(props: CoffeeCardCheckoutProps) {
  const { coffeeId, quantity } = props

  const { 'purple-500': purple500 } = useTheme()

  const coffee = COFFEE.find((coffee) => coffee.id === coffeeId)

  if (!coffee) {
    return <p>Café não encontrado</p>
  }

  const priceFormatted = formatMonetary(coffee.price * quantity)

  return (
    <S.CoffeeCardCheckoutContainer>
      <S.CoffeeCardCheckoutContent>
        <img src={coffee.image} alt="" />

        <div>
          <p>{coffee.name}</p>

          <S.CoffeeCardCheckoutActionContainer>
            <Counter amount={quantity} />

            <S.CoffeeCardCheckoutRemoveButton>
              <div>
                <Trash size={16} color={purple500} />
              </div>
              remover
            </S.CoffeeCardCheckoutRemoveButton>
          </S.CoffeeCardCheckoutActionContainer>
        </div>

        <span>{priceFormatted}</span>
      </S.CoffeeCardCheckoutContent>

      <S.CoffeeCardCheckoutLine />
    </S.CoffeeCardCheckoutContainer>
  )
}
