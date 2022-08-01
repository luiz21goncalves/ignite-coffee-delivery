import { Routes, Route } from 'react-router-dom'

import { Checkout } from './page/Checkout'
import { Home } from './page/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
