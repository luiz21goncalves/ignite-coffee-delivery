import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

type CounterContextProviderProps = {
  children: ReactNode
}

type CounterContextData = {
  amount: number
  increase: () => void
  decrease: () => void
}

const CounterContext = createContext({} as CounterContextData)

function CounterContextProvider(props: CounterContextProviderProps) {
  const { children } = props

  const [amount, setAmount] = useState(1)

  const increase = useCallback(() => {
    setAmount((prevState) => prevState + 1)
  }, [])

  const decrease = useCallback(() => {
    setAmount((prevState) => {
      if (prevState > 1) {
        return prevState - 1
      }

      return prevState
    })
  }, [])

  return (
    <CounterContext.Provider
      value={{
        amount,
        increase,
        decrease,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

const useCounter = () => useContext(CounterContext)

export { CounterContextProvider, useCounter }
