import styled from 'styled-components'

import { FONT_FAMILY, FONT_WEIGHTS } from '../../constants/fonts'
import { BORDER_RADIUS, SIZES } from '../../constants/sizes'

export const CheckoutSuccessContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${SIZES[92]};
  margin: 0 auto;
  max-width: ${SIZES['max-width']};
  width: 100%;
  padding: ${SIZES[72]} 0;
`

export const CheckoutSuccessHeading = styled.h1`
  font-size: ${SIZES[32]};
  font-family: ${FONT_FAMILY.header};
  font-weight: ${FONT_WEIGHTS['extra-bold']};
  color: ${({ theme }) => theme['yellow-900']};
  margin-bottom: ${SIZES[4]};
`

export const CheckoutSuccessCard = styled.div`
  padding: 2px;
  background: linear-gradient(to bottom right, #dbac2c 25%, #8047f8);
  border-radius: ${BORDER_RADIUS[6]} ${BORDER_RADIUS[36]};
  margin-top: ${SIZES[40]};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${SIZES[32]};
    padding: ${SIZES[40]};
    background: ${({ theme }) => theme.background};
    border-radius: ${BORDER_RADIUS[6]} ${BORDER_RADIUS[36]};
  }
`

export const CheckoutSuccessItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES[12]};
`

export const BackgroundIconBase = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  width: ${SIZES[32]};
  height: ${SIZES[32]};
`

export const CheckoutSuccessBackgroundIconMap = styled(BackgroundIconBase)`
  background-color: ${({ theme }) => theme['purple-500']};
`

export const CheckoutSuccessBackgroundIconTime = styled(BackgroundIconBase)`
  background-color: ${({ theme }) => theme['yellow-500']};
`

export const CheckoutSuccessBackgroundIconPayment = styled(BackgroundIconBase)`
  background-color: ${({ theme }) => theme['yellow-900']};
`
