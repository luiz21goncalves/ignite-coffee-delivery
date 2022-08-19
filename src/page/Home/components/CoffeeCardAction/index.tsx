import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../context/CartContext'
import { useCounter } from '../../../../context/CounterContext'

import * as S from './styles'

type CoffeeCardActionProps = {
  coffeeId: number
}

export function CoffeeCardAction(props: CoffeeCardActionProps) {
  const { coffeeId } = props

  const { amount, decrease, increase } = useCounter()
  const { addProductToCart } = useCart()

  function handleAddProductToCart() {
    addProductToCart({ id: coffeeId, quantity: amount })
  }

  return (
    <div>
      <Counter amount={amount} onIncrease={increase} onDecrease={decrease} />

      <S.CoffeeCardButton type="button" onClick={handleAddProductToCart}>
        <ShoppingCart weight="fill" size={22} />
      </S.CoffeeCardButton>
    </div>
  )
}
