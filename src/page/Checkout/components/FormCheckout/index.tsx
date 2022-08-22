import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Input } from '../../../../components/Input'
import { PaymentMethod } from '../PaymentMethod'

import * as S from './styles'

export function FormCheckout() {
  const { 'purple-500': purple500, 'yellow-500': yellow500 } = useTheme()

  return (
    <div>
      <S.FormCheckoutTitle>Complete seu pedido</S.FormCheckoutTitle>

      <S.FormCheckoutContainer>
        <S.FormCheckoutContent>
          <S.FormCheckoutHeader>
            <MapPinLine size={22} color={yellow500} />

            <div>
              <legend>Endereço de Entrega</legend>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </S.FormCheckoutHeader>

          <S.FormCheckoutInputContainer>
            <S.FormCheckoutThreeColumns>
              <Input placeholder="CEP" name="zipcode" />
              <div />
              <div />
            </S.FormCheckoutThreeColumns>

            <Input placeholder="Rua" name="street" />

            <S.FormCheckoutTwoColumns>
              <Input placeholder="Número" name="number" />
              <Input placeholder="Complemento" name="complement" isOptional />
            </S.FormCheckoutTwoColumns>

            <S.FormCheckoutThreeColumns>
              <Input placeholder="Bairro" name="neighborhood" />
              <Input placeholder="Cidade" name="city" />
              <Input placeholder="UF" name="state" />
            </S.FormCheckoutThreeColumns>
          </S.FormCheckoutInputContainer>
        </S.FormCheckoutContent>

        <S.FormCheckoutContent>
          <S.FormCheckoutHeader>
            <CurrencyDollar size={22} color={purple500} />

            <div>
              <legend>Pagamento</legend>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </S.FormCheckoutHeader>

          <PaymentMethod />
        </S.FormCheckoutContent>
      </S.FormCheckoutContainer>
    </div>
  )
}
