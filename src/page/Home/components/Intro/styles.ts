import styled from 'styled-components'

import {
  FONT_FAMILY,
  FONT_WEIGHTS,
  LINE_HEIGHT,
} from '../../../../constants/fonts'
import { SIZES } from '../../../../constants/sizes'

export const IntroWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: ${SIZES[92]};
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${SIZES['max-width']};
  margin: 0 auto;
  gap: ${SIZES[56]};
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: ${SIZES[66]};
`

export const IntroTitle = styled.h1`
  font-family: ${FONT_FAMILY.header};
  font-weight: ${FONT_WEIGHTS['extra-bold']};
  line-height: ${LINE_HEIGHT[130]};
  font-size: ${SIZES[48]};
  margin-bottom: ${SIZES[16]};
`

export const IntroText = styled.p`
  font-size: ${SIZES[20]};
  color: ${({ theme }) => theme['gray-800']};
`

export const LabelGroup = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${SIZES[20]} ${SIZES[40]};
`

export const Background = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: fill;
`
