import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../context/CartContext'
import { formatMonetary } from '../../../../utils'

import * as S from './styles'

type CoffeeCardProps = {
  coffee: {
    id: number
    image: string
    tags: string[]
    name: string
    description: string
    price: number
  }
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { coffee } = props

  const {
    addProductToCart,
    draftCart,
    decreaseToDraftCart,
    increaseToDraftCart,
  } = useCart()

  const priceFormatted = formatMonetary(coffee.price).slice(3)

  const coffeeQuantity =
    draftCart.find((findCoffee) => findCoffee.id === coffee.id)?.quantity || 1

  const handleAddProductToCart = () => {
    addProductToCart({
      id: coffee.id,
      price: coffee.price,
      quantity: coffeeQuantity,
      image: coffee.image,
      name: coffee.name,
    })
  }

  const handleIncrease = () => {
    increaseToDraftCart(coffee.id)
  }

  const handleDecrease = () => {
    decreaseToDraftCart(coffee.id)
  }

  return (
    <S.CoffeeCardContainer>
      <S.CoffeeCardHeader>
        <img src={coffee.image} alt="" />

        <div>
          {coffee.tags.map((tag) => (
            <S.CoffeeCardTag key={tag}>{tag}</S.CoffeeCardTag>
          ))}
        </div>
      </S.CoffeeCardHeader>

      <S.CoffeeCardBody>
        <strong>{coffee.name}</strong>

        <p>{coffee.description}</p>
      </S.CoffeeCardBody>

      <S.CoffeeCardFooter>
        <S.CoffeeCardPrice>
          R$ <span>{priceFormatted}</span>
        </S.CoffeeCardPrice>

        <div>
          <Counter
            amount={coffeeQuantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <S.CoffeeCardButton type="button" onClick={handleAddProductToCart}>
            <ShoppingCart weight="fill" size={22} />
          </S.CoffeeCardButton>
        </div>
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  )
}
