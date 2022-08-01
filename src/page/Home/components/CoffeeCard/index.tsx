import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'

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

  const priceFormatted = String((coffee.price / 100).toFixed(2)).replace(
    '.',
    ',',
  )

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
          <Counter />

          <S.CoffeeCardButton type="button">
            <ShoppingCart weight="fill" size={22} />
          </S.CoffeeCardButton>
        </div>
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  )
}