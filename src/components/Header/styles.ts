import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FONT_WEIGHTS } from '../../constants/fonts'
import { BORDER_RADIUS, SIZES } from '../../constants/sizes'

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.background};
`

export const HeaderContainer = styled.header`
  max-width: ${SIZES['max-width']};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SIZES[32]} 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${SIZES[12]};
  }
`

const LabelBase = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SIZES[8]};
  border-radius: ${BORDER_RADIUS[6]};
  text-decoration: none;
`

export const CityLabel = styled(LabelBase)`
  gap: ${SIZES[4]};
  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-900']};
`

export const CartLabel = styled(LabelBase)`
  background-color: ${({ theme }) => theme['yellow-100']};
  position: relative;

  &::before {
    content: attr(data-amount);
    position: absolute;
    top: -${SIZES[4]};
    right: -${SIZES[4]};
    background-color: ${({ theme }) => theme['yellow-900']};
    color: ${({ theme }) => theme.white};
    font-weight: ${FONT_WEIGHTS.bold};
    padding: 0 ${SIZES[4]};
    border-radius: 9999px;
    font-size: ${SIZES[12]};
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
