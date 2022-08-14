import styled from 'styled-components'

import { FONT_FAMILY, FONT_WEIGHTS } from '../../../../constants/fonts'
import { BORDER_RADIUS, SIZES } from '../../../../constants/sizes'

export const FormCheckoutTitle = styled.strong`
  display: block;
  font-family: ${FONT_FAMILY.header};
  font-size: ${SIZES[18]};
  font-weight: ${FONT_WEIGHTS.bold};
  margin-bottom: ${SIZES[16]};
`

export const FormCheckoutContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${SIZES[12]};
`
export const FormCheckoutContent = styled.fieldset`
  padding: ${SIZES[40]};
  background-color: ${({ theme }) => theme['gray-100']};
  border: none;
  border-radius: ${BORDER_RADIUS[6]};
  width: 100%;
`
export const FormCheckoutHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${SIZES[32]};
  gap: ${SIZES[8]};

  > div {
    span {
      font-size: ${SIZES[14]};
      color: ${({ theme }) => theme['gray-700']};
    }
  }
`
export const FormCheckoutInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES[16]};
`

export const FormCheckoutThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: ${SIZES[12]};
`
export const FormCheckoutTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${SIZES[12]};
`
