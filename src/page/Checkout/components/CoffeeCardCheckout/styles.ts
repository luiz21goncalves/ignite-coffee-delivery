import styled from 'styled-components'

import { BORDER_RADIUS, SIZES } from '../../../../constants/sizes'

export const CoffeeCardCheckoutContainer = styled.div``

export const CoffeeCardCheckoutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SIZES[8]} ${SIZES[4]};
  margin-bottom: ${SIZES[24]};
  gap: ${SIZES[20]};

  img {
    width: 64px;
    height: 64px;
  }
`

export const CoffeeCardCheckoutLine = styled.hr`
  border: 1px solid ${({ theme }) => theme['gray-300']};
`

export const CoffeeCardCheckoutActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES[8]};
`

export const CoffeeCardCheckoutRemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${SIZES[4]};
  padding: 10px ${SIZES[8]};
  border: none;
  border-radius: ${BORDER_RADIUS[6]};
  background-color: ${({ theme }) => theme['gray-300']};
  font-size: ${SIZES[12]};
  text-transform: uppercase;
  color: ${({ theme }) => theme['gray-700']};
  transition: color 200ms, background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-800']};
  }

  div {
    width: ${SIZES[16]};
    height: ${SIZES[16]};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
