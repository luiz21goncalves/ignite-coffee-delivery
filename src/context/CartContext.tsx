import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react'

import {
  addProductToCartAction,
  populateDraftCartAction,
} from '../reducers/cart/actions'
import { cartReducer, Product } from '../reducers/cart/reducers'

type CartContextData = {
  productsAmount: number
  products: Product[]
  draftCart: Product[]
  addProductToCart: (data: Product) => void
  populateDraftCart: (data: Product[]) => void
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

  return (
    <CartContext.Provider
      value={{
        products,
        productsAmount,
        draftCart,
        addProductToCart,
        populateDraftCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
