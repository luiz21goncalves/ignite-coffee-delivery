import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react'

import {
  addProductToCartAction,
  decreaseToDraftCartAction,
  increaseToDraftCartAction,
  populateDraftCartAction,
} from '../reducers/cart/actions'
import { cartReducer, Product } from '../reducers/cart/reducers'

type CartContextData = {
  productsAmount: number
  products: Product[]
  draftCart: Product[]
  addProductToCart: (data: Product) => void
  populateDraftCart: (data: Product[]) => void
  increaseToDraftCart: (id: number) => void
  decreaseToDraftCart: (id: number) => void
}

type CartContextProviderProps = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

function CartContextProvider(props: CartContextProviderProps) {
  const { children } = props

  const [cartState, dispatch] = useReducer(cartReducer, {
    productsAmount: 0,
    products: [],
    draftCart: [],
  })

  const { products, draftCart, productsAmount } = cartState

  const addProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCartAction(product))
  }, [])

  const populateDraftCart = useCallback((products: Product[]) => {
    dispatch(populateDraftCartAction(products))
  }, [])

  const increaseToDraftCart = useCallback((id: number) => {
    dispatch(increaseToDraftCartAction(id))
  }, [])

  const decreaseToDraftCart = useCallback((id: number) => {
    dispatch(decreaseToDraftCartAction(id))
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        productsAmount,
        draftCart,
        addProductToCart,
        populateDraftCart,
        increaseToDraftCart,
        decreaseToDraftCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
