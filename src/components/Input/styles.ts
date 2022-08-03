import styled, { css } from 'styled-components'

import { SIZES } from '../../constants/sizes'

type InputContainerProps = {
  isFilled: boolean
  isFocused: boolean
}

const highlightStyle = css`
  border-color: ${({ theme }) => theme['yellow-900']};
`

export const InputContainer = styled.div<InputContainerProps>`
  background-color: #eeeded;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 4px;
  outline: none;
  transition: border-color 200ms;
  color: ${({ theme }) => theme['gray-700']};
  padding: ${SIZES[12]};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ isFocused }) => isFocused && highlightStyle}

  ${({ isFilled }) => isFilled && highlightStyle}
`

export const Input = styled.input`
  color: ${({ theme }) => theme['gray-700']};
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme['gray-600']};
  }
`

export const InputHelperText = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme['gray-600']};
`
