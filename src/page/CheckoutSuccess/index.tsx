import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import deliveryIllustration from '../../assets/delivery.png'

import * as S from './styles'

export function CheckoutSuccess() {
  const { background } = useTheme()

  return (
    <S.CheckoutSuccessContainer>
      <section>
        <S.CheckoutSuccessHeading>
          Uhu! Pedido confirmado
        </S.CheckoutSuccessHeading>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <S.CheckoutSuccessCard>
          <div>
            <S.CheckoutSuccessItem>
              <S.CheckoutSuccessBackgroundIconMap>
                <MapPin weight="fill" size={16} color={background} />
              </S.CheckoutSuccessBackgroundIconMap>

              <p>
                Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </S.CheckoutSuccessItem>

            <S.CheckoutSuccessItem>
              <S.CheckoutSuccessBackgroundIconTime>
                <Timer weight="fill" size={16} color={background} />
              </S.CheckoutSuccessBackgroundIconTime>

              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30min</strong>
              </p>
            </S.CheckoutSuccessItem>

            <S.CheckoutSuccessItem>
              <S.CheckoutSuccessBackgroundIconPayment>
                <CurrencyDollar size={16} color={background} />
              </S.CheckoutSuccessBackgroundIconPayment>

              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </S.CheckoutSuccessItem>
          </div>
        </S.CheckoutSuccessCard>
      </section>

      <section>
        <img src={deliveryIllustration} alt="" />
      </section>
    </S.CheckoutSuccessContainer>
  )
}
