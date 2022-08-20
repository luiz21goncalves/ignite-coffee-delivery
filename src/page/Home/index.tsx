import { useEffect } from 'react'

import { COFFEE } from '../../constants/coffee'
import { useCart } from '../../context/CartContext'

import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import * as S from './styles'

export function Home() {
  const { populateDraftCart } = useCart()

  useEffect(() => {
    const products = COFFEE.map((coffee) => ({
      id: coffee.id,
      price: coffee.price,
      quantity: 1,
    }))

    populateDraftCart(products)
  }, [populateDraftCart])

  return (
    <>
      <Intro />
      <S.HomeContent>
        <h2>Nossos cafés</h2>

        <section>
          {COFFEE.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </section>
      </S.HomeContent>
    </>
  )
}
