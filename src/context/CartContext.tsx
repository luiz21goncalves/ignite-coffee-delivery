import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react'

import {
  addProductToCartAction,
  decreaseToCartAction,
  decreaseToDraftCartAction,
  increaseToCartAction,
  increaseToDraftCartAction,
  populateDraftCartAction,
} from '../reducers/cart/actions'
import { cartReducer, DraftProduct, Product } from '../reducers/cart/reducers'

type CartContextData = {
  productsAmount: number
  products: Product[]
  draftCart: DraftProduct[]
  shippingPrice: number
  productsPrice: number
  addProductToCart: (data: Product) => void
  populateDraftCart: (data: DraftProduct[]) => void
  increaseToDraftCart: (id: number) => void
  decreaseToDraftCart: (id: number) => void
  increaseToCart: (id: number) => void
  decreaseToCart: (id: number) => void
}

type CartContextProviderProps = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

function CartContextProvider(props: CartContextProviderProps) {
  const { children } = props

  const [cartState, dispatch] = useReducer(cartReducer, {
    productsAmount: 0,
    shippingPrice: 0,
    productsPrice: 0,
    products: [],
    draftCart: [],
  })

  const { products, draftCart, productsPrice, shippingPrice, productsAmount } =
    cartState

  const addProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCartAction(product))
  }, [])

  const populateDraftCart = useCallback((products: DraftProduct[]) => {
    dispatch(populateDraftCartAction(products))
  }, [])

  const increaseToDraftCart = useCallback((id: number) => {
    dispatch(increaseToDraftCartAction(id))
  }, [])

  const decreaseToDraftCart = useCallback((id: number) => {
    dispatch(decreaseToDraftCartAction(id))
  }, [])

  const increaseToCart = useCallback((id: number) => {
    dispatch(increaseToCartAction(id))
  }, [])

  const decreaseToCart = useCallback((id: number) => {
    dispatch(decreaseToCartAction(id))
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        productsAmount,
        draftCart,
        productsPrice,
        shippingPrice,
        addProductToCart,
        populateDraftCart,
        increaseToDraftCart,
        decreaseToDraftCart,
        increaseToCart,
        decreaseToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
