/* eslint-disable no-unused-vars */

import { Product, DraftProduct } from './reducers'

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  POPULATE_DRAFT_CART = 'POPULATE_DRAFT_CART',
  INCREASE_PRODUCT_TO_DRAFT_CART = 'INCREASE_PRODUCT_TO_DRAFT_CART',
  DECREASE_PRODUCT_TO_DRAFT_CART = 'DECREASE_PRODUCT_TO_DRAFT_CART',
  INCREASE_PRODUCT_TO_CART = 'INCREASE_PRODUCT_TO_CART',
  DECREASE_PRODUCT_TO_CART = 'DECREASE_PRODUCT_TO_CART',
  REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART',
  CLEAN_CART = 'CLEAN_CART',
}

export function addProductToCartAction(product: Product) {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  }
}

export function populateDraftCartAction(products: DraftProduct[]) {
  return {
    type: CartActionTypes.POPULATE_DRAFT_CART,
    payload: { products },
  }
}

export function increaseToDraftCartAction(id: number) {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_TO_DRAFT_CART,
    payload: { product: { id } },
  }
}

export function decreaseToDraftCartAction(id: number) {
  return {
    type: CartActionTypes.DECREASE_PRODUCT_TO_DRAFT_CART,
    payload: { product: { id } },
  }
}

export function increaseToCartAction(id: number) {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_TO_CART,
    payload: { product: { id } },
  }
}

export function decreaseToCartAction(id: number) {
  return {
    type: CartActionTypes.DECREASE_PRODUCT_TO_CART,
    payload: { product: { id } },
  }
}

export function removeToCartAction(id: number) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT_TO_CART,
    payload: { product: { id } },
  }
}

export function cleanCartAction() {
  return {
    type: CartActionTypes.CLEAN_CART,
  }
}
