import { ShoppingCart } from 'phosphor-react'

import coffeeExpresso from '../../../../assets/coffee/expresso.png'
import { Counter } from '../../../../components/Counter'

import * as S from './styles'

export function CoffeeCard() {
  return (
    <S.CoffeeCardContainer>
      <S.CoffeeCardHeader>
        <img src={coffeeExpresso} alt="" />

        <div>
          <S.CoffeeCardTag>tradicional</S.CoffeeCardTag>
        </div>
      </S.CoffeeCardHeader>

      <S.CoffeeCardBody>
        <strong>Expresso Tradicional</strong>

        <p>O tradicional café feito com água quente e grãos moídos</p>
      </S.CoffeeCardBody>

      <S.CoffeeCardFooter>
        <S.CoffeeCardPrice>
          R$ <span>9,90</span>
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
