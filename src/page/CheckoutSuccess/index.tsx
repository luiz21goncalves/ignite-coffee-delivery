import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'

import deliveryIllustration from '../../assets/delivery.png'

import * as S from './styles'

type PageState = {
  city: string
  number: string
  neighborhood: string
  street: string
  state: string
  payment: string
}

export function CheckoutSuccess() {
  const { background } = useTheme()
  const location = useLocation()

  const { city, neighborhood, number, payment, state, street } =
    location.state as PageState

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
                Entrega em Rua{' '}
                <strong>
                  {street}, {number}
                </strong>
                <br />
                {neighborhood} - {city}, {state}
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
                <strong>{payment}</strong>
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
