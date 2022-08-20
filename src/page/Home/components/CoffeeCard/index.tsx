import { formatMonetary } from '../../../../utils'
import { CoffeeCardAction } from '../CoffeeCardAction'

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

  const priceFormatted = formatMonetary(coffee.price).slice(3)

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

        <CoffeeCardAction coffeeId={coffee.id} />
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  )
}
