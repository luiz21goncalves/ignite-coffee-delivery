import { FormCheckout } from './components/FormCheckout'
import { OrderVisualization } from './components/OrderVisualization'
import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <FormCheckout />
      <OrderVisualization />
    </S.CheckoutContainer>
  )
}
