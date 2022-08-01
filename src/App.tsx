import { ThemeProvider } from 'styled-components'

import { Checkout } from './page/Checkout'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Checkout />
      <GlobalStyles />
    </ThemeProvider>
  )
}
