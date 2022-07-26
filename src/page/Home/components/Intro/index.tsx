import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import backgroundImage from '../../../../assets/background.png'
import heroImage from '../../../../assets/hero.png'
import { IntroLabel } from '../IntroLabel'

import * as S from './styles'

export function Intro() {
  const {
    'yellow-500': yellow500,
    'yellow-900': yellow900,
    'gray-700': gray700,
    'purple-500': purple500,
    background,
  } = useTheme()

  return (
    <S.IntroWrapper>
      <S.IntroContainer>
        <S.IntroContent>
          <div>
            <S.IntroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </S.IntroTitle>

            <S.IntroText>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.IntroText>
          </div>

          <S.LabelGroup>
            <IntroLabel
              backgroundColor={yellow900}
              icon={<ShoppingCart weight="fill" size={16} color={background} />}
            >
              Compra simples e segura
            </IntroLabel>

            <IntroLabel
              backgroundColor={gray700}
              icon={<Package weight="fill" size={16} color={background} />}
            >
              Embalagem mantém o café intacto
            </IntroLabel>

            <IntroLabel
              backgroundColor={yellow500}
              icon={<Timer weight="fill" size={16} color={background} />}
            >
              Entrega rápida e rastreada
            </IntroLabel>

            <IntroLabel
              backgroundColor={purple500}
              icon={<Coffee weight="fill" size={16} color={background} />}
            >
              O café chega fresquinho até você
            </IntroLabel>
          </S.LabelGroup>
        </S.IntroContent>

        <img src={heroImage} alt="" />
      </S.IntroContainer>

      <S.Background src={backgroundImage} alt="" />
    </S.IntroWrapper>
  )
}
