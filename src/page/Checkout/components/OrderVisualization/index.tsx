import { useCart } from '../../../../context/CartContext'
import { formatMonetary } from '../../../../utils'
import { CoffeeCardCheckout } from '../CoffeeCardCheckout'

import * as S from './styles'

export function OrderVisualization() {
  const { products, productsPrice, shippingPrice } = useCart()

  const totalOrderPrice = productsPrice + shippingPrice

  const formattedProductsPrice = formatMonetary(productsPrice)
  const formattedShippingPrice = formatMonetary(shippingPrice)
  const formatttedTotalOrderPrice = formatMonetary(totalOrderPrice)

  return (
    <div>
      <S.OrderVisualizationTitle>Cafés selecionados</S.OrderVisualizationTitle>

      <S.OrderVisualizationContainer>
        <S.OrderVisualizationList>
          {products.map((coffee) => (
            <CoffeeCardCheckout key={coffee.id} coffeeId={coffee.id} />
          ))}
        </S.OrderVisualizationList>

        <S.OrderVisualizationFooter>
          <div>
            <span>Total de items</span>
            <span>{formattedProductsPrice}</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>{formattedShippingPrice}</span>
          </div>

          <S.OrderVisualizationTotal>
            <strong>Total</strong>
            <strong>{formatttedTotalOrderPrice}</strong>
          </S.OrderVisualizationTotal>

          <S.OrderVisualizationConfirmationButton type="button">
            confirmar pedido
          </S.OrderVisualizationConfirmationButton>
        </S.OrderVisualizationFooter>
      </S.OrderVisualizationContainer>
    </div>
  )
}
