import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './page/Checkout'
import { CheckoutSuccess } from './page/CheckoutSuccess'
import { Home } from './page/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  )
}
