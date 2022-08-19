import styled from 'styled-components'

import { BORDER_RADIUS, SIZES } from '../../constants/sizes'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES[4]};
  padding: ${SIZES[8]};
  border-radius: ${BORDER_RADIUS[6]};
  background-color: ${({ theme }) => theme['gray-300']};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: unset;
    min-width: ${SIZES[20]};
  }
`
export const InputButtonIcon = styled.button`
  width: ${SIZES[20]};
  height: ${SIZES[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme['purple-500']};
  transition: color 200ms;

  &:hover {
    color: ${({ theme }) => theme['purple-900']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: no-drop;
  }
`
