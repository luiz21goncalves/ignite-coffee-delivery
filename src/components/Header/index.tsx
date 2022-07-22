import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import * as S from './styles'

export function Header() {
  const { 'purple-500': purple500, 'yellow-900': yellow900 } = useTheme()

  return (
    <S.HeaderContainer>
      <a href="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </a>

      <nav>
        <S.CityLabel>
          <MapPin weight="fill" size={22} color={purple500} />
          Porto Alegre, RS
        </S.CityLabel>

        <S.CartLabel href="/cart" data-amount={3}>
          <ShoppingCart weight="fill" size={22} color={yellow900} />
        </S.CartLabel>
      </nav>
    </S.HeaderContainer>
  )
}
