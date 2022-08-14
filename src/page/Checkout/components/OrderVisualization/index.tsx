import { CoffeeCardCheckout } from '../CoffeeCardCheckout'

import * as S from './styles'

export function OrderVisualization() {
  return (
    <div>
      <S.OrderVisualizationTitle>Cafés selecionados</S.OrderVisualizationTitle>

      <S.OrderVisualizationContainer>
        <S.OrderVisualizationList>
          <CoffeeCardCheckout />
          <CoffeeCardCheckout />
        </S.OrderVisualizationList>

        <S.OrderVisualizationFooter>
          <div>
            <span>Total de items</span>
            <span>R$ 29,70</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <S.OrderVisualizationTotal>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </S.OrderVisualizationTotal>

          <S.OrderVisualizationConfirmationButton type="button">
            confirmar pedido
          </S.OrderVisualizationConfirmationButton>
        </S.OrderVisualizationFooter>
      </S.OrderVisualizationContainer>
    </div>
  )
}
