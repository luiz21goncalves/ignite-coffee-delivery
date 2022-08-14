import styled from 'styled-components'

import { SIZES } from '../../../../constants/sizes'

type IconContainerProps = {
  backgroundColor: string
}

export const IntroLabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: ${SIZES[12]};
`

export const IconContainer = styled.div<IconContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${SIZES[8]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`
