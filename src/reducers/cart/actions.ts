/* eslint-disable no-unused-vars */

import { Product } from './reducers'

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
}

export function addProductToCartAction(product: Product) {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  }
}
