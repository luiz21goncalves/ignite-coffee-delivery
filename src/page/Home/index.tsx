import { COFFEE } from '../../constants/coffee'

import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import * as S from './styles'

export function Home() {
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
