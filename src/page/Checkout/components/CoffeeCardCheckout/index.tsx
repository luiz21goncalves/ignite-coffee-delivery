import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../context/CartContext'
import { formatMonetary } from '../../../../utils'

import * as S from './styles'

type CoffeeCardCheckoutProps = {
  coffeeId: number
}

export function CoffeeCardCheckout(props: CoffeeCardCheckoutProps) {
  const { coffeeId } = props

  const { 'purple-500': purple500 } = useTheme()
  const { products, increaseToCart, decreaseToCart, removeToCart } = useCart()

  const coffee = products.find((coffee) => coffee.id === coffeeId)

  if (!coffee) {
    return <p>Café não encontrado</p>
  }

  const priceFormatted = formatMonetary(coffee.price * coffee.quantity)

  const handleIncrease = () => {
    increaseToCart(coffee.id)
  }

  const handleDecrease = () => {
    decreaseToCart(coffee.id)
  }

  const handleRemove = () => {
    removeToCart(coffee.id)
  }

  return (
    <S.CoffeeCardCheckoutContainer>
      <S.CoffeeCardCheckoutContent>
        <img src={coffee.image} alt="" />

        <div>
          <p>{coffee.name}</p>

          <S.CoffeeCardCheckoutActionContainer>
            <Counter
              amount={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />

            <S.CoffeeCardCheckoutRemoveButton onClick={handleRemove}>
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
