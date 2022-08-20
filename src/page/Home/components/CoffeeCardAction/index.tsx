import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../context/CartContext'

import * as S from './styles'

type CoffeeCardActionProps = {
  coffeeId: number
}

export function CoffeeCardAction(props: CoffeeCardActionProps) {
  const { coffeeId } = props

  const {
    addProductToCart,
    draftCart,
    decreaseToDraftCart,
    increaseToDraftCart,
  } = useCart()

  const coffee = draftCart.find((coffee) => coffee.id === coffeeId)

  if (!coffee) {
    return null
  }

  const handleAddProductToCart = () => {
    addProductToCart(coffee)
  }

  const handleIncrease = () => {
    increaseToDraftCart(coffee.id)
  }

  const handleDecrease = () => {
    decreaseToDraftCart(coffee.id)
  }

  return (
    <div>
      <Counter
        amount={coffee.quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />

      <S.CoffeeCardButton type="button" onClick={handleAddProductToCart}>
        <ShoppingCart weight="fill" size={22} />
      </S.CoffeeCardButton>
    </div>
  )
}
