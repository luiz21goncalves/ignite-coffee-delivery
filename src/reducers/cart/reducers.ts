import { produce } from 'immer'

import { CartActionTypes } from './actions'

export type Product = {
  id: number
  quantity: number
}

type CartState = {
  products: Product[]
  productsAmount: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (product) => product.id === action.payload.product.id,
        )

        const hasProduct = productIndex >= 0

        if (hasProduct) {
          draft.products[productIndex] = action.payload.product
        } else {
          draft.products.push(action.payload.product)
          draft.productsAmount = draft.products.length
        }
      })

    default:
      return state
  }
}
