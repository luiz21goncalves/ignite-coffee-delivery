import styled, { css } from 'styled-components'

import { BORDER_RADIUS, SIZES } from '../../../../constants/sizes'

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SIZES[12]};
`

type PaymentMethodButtonProps = {
  isSelected: boolean
}

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  padding: ${SIZES[16]};
  display: flex;
  align-items: center;
  gap: ${SIZES[12]};
  width: 100%;
  border: 1px solid transparent;
  border-radius: ${BORDER_RADIUS[6]};
  background-color: ${({ theme }) => theme['gray-300']};
  text-transform: uppercase;
  font-size: ${SIZES[12]};
  color: ${({ theme }) => theme['gray-700']};
  line-height: ${SIZES[12]};
  transition: background-color 200ms, border-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme['gray-400']};
  }

  &:active {
    border-color: ${({ theme }) => theme['purple-500']};
    background-color: ${({ theme }) => theme['purple-100']};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: ${({ theme }) => theme['purple-500']};
      background-color: ${({ theme }) => theme['purple-100']};
    `}
`
