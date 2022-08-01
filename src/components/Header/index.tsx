import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import * as S from './styles'

export function Header() {
  const { 'purple-500': purple500, 'yellow-900': yellow900 } = useTheme()

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Link to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </Link>

        <nav>
          <S.CityLabel to="/">
            <MapPin weight="fill" size={22} color={purple500} />
            Porto Alegre, RS
          </S.CityLabel>

          <S.CartLabel to="/checkout" data-amount={3}>
            <ShoppingCart weight="fill" size={22} color={yellow900} />
          </S.CartLabel>
        </nav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
