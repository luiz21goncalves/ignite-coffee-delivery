/* eslint-disable no-unused-vars */

import { Product } from './reducers'

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  POPULATE_DRAFT_CART = 'POPULATE_DRAFT_CART',
}

export function addProductToCartAction(product: Product) {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  }
}

export function populateDraftCartAction(products: Product[]) {
  return {
    type: CartActionTypes.POPULATE_DRAFT_CART,
    payload: { products },
  }
}
