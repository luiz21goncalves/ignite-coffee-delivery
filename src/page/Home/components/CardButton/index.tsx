import { ShoppingCart } from 'phosphor-react'

import { useCart } from '../../../../context/CartContext'
import { useCounter } from '../../../../context/CounterContext'

import * as S from './styles'

type CardButtonProps = {
  coffeeId: number
}

export function CardButton(props: CardButtonProps) {
  const { coffeeId } = props

  const { amount } = useCounter()
  const { addProductToCart } = useCart()

  function handleAddProductToCart() {
    addProductToCart({ id: coffeeId, quantity: amount })
  }

  return (
    <S.CoffeeCardButton type="button" onClick={handleAddProductToCart}>
      <ShoppingCart weight="fill" size={22} />
    </S.CoffeeCardButton>
  )
}
