import 'styled-components'

import { ThemeType } from '../styles/theme/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
