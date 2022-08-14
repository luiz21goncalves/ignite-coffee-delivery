import styled from 'styled-components'

import { SIZES } from '../../constants/sizes'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: ${SIZES['max-width']};
  margin: ${SIZES[40]} auto;
  gap: ${SIZES[32]};
`
