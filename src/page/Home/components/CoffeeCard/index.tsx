import { Counter } from '../../../../components/Counter'
import { CounterContextProvider } from '../../../../context/CounterContext'
import { formatMonetary } from '../../../../utils'
import { CardButton } from '../CardButton'

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

        <CounterContextProvider>
          <div>
            <Counter />

            <CardButton coffeeId={coffee.id} />
          </div>
        </CounterContextProvider>
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  )
}
