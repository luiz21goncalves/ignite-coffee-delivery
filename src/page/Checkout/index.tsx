import { FormProvider, useForm } from 'react-hook-form'

import { FormCheckout } from './components/FormCheckout'
import { OrderVisualization } from './components/OrderVisualization'
import * as S from './styles'

export function Checkout() {
  const newPurchaseForm = useForm({
    defaultValues: {
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      payment: '',
      state: '',
      street: '',
      zipcode: '',
    },
  })

  return (
    <S.CheckoutContainer>
      <FormProvider {...newPurchaseForm}>
        <FormCheckout />
        <OrderVisualization />
      </FormProvider>
    </S.CheckoutContainer>
  )
}
