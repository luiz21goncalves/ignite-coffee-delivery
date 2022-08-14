import { createGlobalStyle } from 'styled-components'

import { FONT_FAMILY, FONT_WEIGHTS, LINE_HEIGHT } from '../constants/fonts'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['gray-700']}
  }

  body, input, button {
    font-family: ${FONT_FAMILY.text};
    font-size: 1rem;
    font-weight: ${FONT_WEIGHTS.regular};
    line-height: ${LINE_HEIGHT[130]};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
