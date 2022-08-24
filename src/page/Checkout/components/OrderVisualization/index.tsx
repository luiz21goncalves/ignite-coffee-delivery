import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../../../context/CartContext'
import { formatMonetary } from '../../../../utils'
import { CoffeeCardCheckout } from '../CoffeeCardCheckout'

import * as S from './styles'

type FormValues = {
  city: string
  complement: string
  neighborhood: string
  number: string
  payment: string
  state: string
  street: string
  zipcode: string
}

export function OrderVisualization() {
  const { products, productsPrice, shippingPrice, cleanCart } = useCart()
  const { handleSubmit, reset } = useFormContext<FormValues>()

  const navigate = useNavigate()

  const totalOrderPrice = productsPrice + shippingPrice

  const formattedProductsPrice = formatMonetary(productsPrice)
  const formattedShippingPrice = formatMonetary(shippingPrice)
  const formatttedTotalOrderPrice = formatMonetary(totalOrderPrice)

  function handleCreateNewPurchase(data: FormValues) {
    const hasEmptyField = Object.entries(data).reduce(
      (isEmptyField, [key, value]) => {
        if (key !== 'complement' && !value) {
          return true
        }

        return isEmptyField
      },
      false,
    )

    if (hasEmptyField) {
      return alert('Preencha todos ao campos obrigatórios')
    }

    const { city, number, neighborhood, street, state, payment } = data

    reset()
    cleanCart()

    navigate('success', {
      state: {
        city,
        number,
        neighborhood,
        street,
        state,
        payment,
      },
    })
  }

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

          <S.OrderVisualizationConfirmationButton
            type="button"
            onClick={handleSubmit(handleCreateNewPurchase)}
          >
            confirmar pedido
          </S.OrderVisualizationConfirmationButton>
        </S.OrderVisualizationFooter>
      </S.OrderVisualizationContainer>
    </div>
  )
}
