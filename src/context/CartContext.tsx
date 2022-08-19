import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react'

import { addProductToCartAction } from '../reducers/cart/actions'
import { cartReducer, Product } from '../reducers/cart/reducers'

type CartContextData = {
  productsAmount: number
  products: Product[]
  addProductToCart: (data: Product) => void
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
  })

  const { products, productsAmount } = cartState

  const addProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCartAction(product))
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        productsAmount,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
