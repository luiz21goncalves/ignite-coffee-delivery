import styled from 'styled-components'

import { BORDER_RADIUS, SIZES } from '../../../../constants/sizes'

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
