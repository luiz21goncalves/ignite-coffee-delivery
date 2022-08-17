import { createContext, ReactNode, useContext } from 'react'

type CartContextData = {
  productsAmount: number
}

type CartContextProviderProps = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

function CartContextProvider(props: CartContextProviderProps) {
  const { children } = props

  return (
    <CartContext.Provider value={{ productsAmount: 0 }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
