import styled from 'styled-components'

import {
  FONT_FAMILY,
  FONT_WEIGHTS,
  LINE_HEIGHT,
} from '../../../../constants/fonts'
import { BORDER_RADIUS, SIZES } from '../../../../constants/sizes'

export const OrderVisualizationTitle = styled.strong`
  display: block;
  font-family: ${FONT_FAMILY.header};
  font-size: ${SIZES[18]};
  font-weight: ${FONT_WEIGHTS.bold};
  margin-bottom: ${SIZES[16]};
`

export const OrderVisualizationContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: ${SIZES[40]};
  border-radius: ${BORDER_RADIUS[6]} 44px;
`

export const OrderVisualizationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES[24]};
`

export const OrderVisualizationFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${SIZES[24]};
  margin-top: ${SIZES[24]};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderVisualizationConfirmationButton = styled.button`
  background-color: ${({ theme }) => theme['yellow-500']};
  padding: ${SIZES[12]} ${SIZES[8]};
  border: none;
  border-radius: ${BORDER_RADIUS[6]};
  font-size: ${SIZES[14]};
  line-height: ${LINE_HEIGHT[160]};
  font-weight: ${FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-900']};
  }
`

export const OrderVisualizationTotal = styled.div`
  font-size: ${SIZES[20]};
  color: ${({ theme }) => theme['gray-800']};
`
