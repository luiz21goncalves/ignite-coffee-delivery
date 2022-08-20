import styled from 'styled-components'

import { FONT_FAMILY, FONT_WEIGHTS } from '../../../../constants/fonts'
import { BORDER_RADIUS, SIZES } from '../../../../constants/sizes'

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: ${SIZES[20]};
  border-top-left-radius: ${BORDER_RADIUS[6]};
  border-top-right-radius: ${BORDER_RADIUS[36]};
  border-bottom-left-radius: ${BORDER_RADIUS[36]};
  border-bottom-right-radius: ${BORDER_RADIUS[6]};
  max-width: 256px;
`

export const CoffeeCardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${SIZES[12]};
  margin-top: -${SIZES[40]};

  > div {
    display: flex;
    gap: ${SIZES[4]};
  }
`

export const CoffeeCardTag = styled.span`
  padding: ${SIZES[4]} ${SIZES[8]};
  color: ${({ theme }) => theme['yellow-900']};
  background-color: ${({ theme }) => theme['yellow-100']};
  border-radius: ${BORDER_RADIUS.pill};
  font-size: ${SIZES[10]};
  font-weight: ${FONT_WEIGHTS['extra-bold']};
  text-transform: uppercase;
`

export const CoffeeCardBody = styled.div`
  margin-top: ${SIZES[20]};
  margin-bottom: ${SIZES[32]};
  text-align: center;

  strong {
    display: inline-block;
    font-family: ${FONT_FAMILY.header};
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${SIZES[20]};
    color: ${({ theme }) => theme['gray-800']};
    margin-bottom: ${SIZES[8]};
  }

  p {
    font-size: ${SIZES[14]};
    color: ${({ theme }) => theme['gray-600']};
  }
`

export const CoffeeCardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${SIZES[8]};
  }
`

export const CoffeeCardPrice = styled.p`
  font-size: ${SIZES[14]};
  display: inline-block;

  span {
    font-weight: ${FONT_WEIGHTS['extra-bold']};
    font-size: ${SIZES[24]};
    font-family: ${FONT_FAMILY.header};
  }
`
export const CoffeeCardFooterInput = styled.input`
  width: ${SIZES[72]};
`

export const CoffeeCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${BORDER_RADIUS[6]};
  padding: ${SIZES[8]};
  color: ${({ theme }) => theme['gray-100']};
  border: none;
  background-color: ${({ theme }) => theme['purple-900']};
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`
