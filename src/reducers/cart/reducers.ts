import { produce } from 'immer'

import { CartActionTypes } from './actions'

export type DraftProduct = {
  id: number
  quantity: number
  price: number
}

export type Product = {
  id: number
  quantity: number
  price: number
  image: string
  name: string
}

type CartState = {
  products: Product[]
  productsAmount: number
  draftCart: DraftProduct[]
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

    case CartActionTypes.POPULATE_DRAFT_CART:
      return produce(state, (draft) => {
        draft.draftCart = action.payload.products
      })

    case CartActionTypes.INCREASE_PRODUCT_TO_DRAFT_CART:
      return produce(state, (draft) => {
        draft.draftCart = draft.draftCart.map((product) => {
          if (product.id === action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }

          return product
        })
      })

    case CartActionTypes.DECREASE_PRODUCT_TO_DRAFT_CART:
      return produce(state, (draft) => {
        draft.draftCart = draft.draftCart.map((product) => {
          if (
            product.id === action.payload.product.id &&
            product.quantity > 1
          ) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }

          return product
        })
      })

    case CartActionTypes.INCREASE_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.draftCart = draft.draftCart.map((product) => {
          if (product.id === action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }

          return product
        })

        draft.products = draft.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }

          return product
        })
      })

    case CartActionTypes.DECREASE_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.draftCart = draft.draftCart.map((product) => {
          if (
            product.id === action.payload.product.id &&
            product.quantity > 1
          ) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }

          return product
        })

        draft.products = draft.products.map((product) => {
          if (
            product.id === action.payload.product.id &&
            product.quantity > 1
          ) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }

          return product
        })
      })

    default:
      return state
  }
}
