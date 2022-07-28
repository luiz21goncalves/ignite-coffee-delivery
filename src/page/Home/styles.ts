import styled from 'styled-components'

import { FONT_FAMILY, FONT_WEIGHTS } from '../../constants/fonts'
import { SIZES } from '../../constants/sizes'

export const HomeContent = styled.main`
  max-width: ${SIZES['max-width']};
  margin: 0 auto;
  padding-bottom: ${SIZES[92]};

  h2 {
    font-family: ${FONT_FAMILY.header};
    font-size: ${SIZES[32]};
    font-weight: ${FONT_WEIGHTS['extra-bold']};
  }

  section {
    margin-top: calc(${SIZES[56]} + ${SIZES[20]});
    display: grid;
    grid-template-columns: repeat(4, auto);
    row-gap: calc(${SIZES[40]} + ${SIZES[20]});
    column-gap: ${SIZES[32]};
  }
`
