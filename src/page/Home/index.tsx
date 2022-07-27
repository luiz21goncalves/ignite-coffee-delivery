import { Header } from '../../components/Header'

import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import * as S from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Intro />
      <S.HomeContent>
        <h2>Nossos cafés</h2>

        <section>
          <CoffeeCard />
        </section>
      </S.HomeContent>
    </>
  )
}
