import { ReactNode } from 'react'

import * as S from './styles'

type IntroLabelProps = {
  backgroundColor: string
  icon: ReactNode
  children: string
}

export function IntroLabel(props: IntroLabelProps) {
  const { backgroundColor, children, icon } = props

  return (
    <S.IntroLabelContainer>
      <S.IconContainer backgroundColor={backgroundColor}>
        {icon}
      </S.IconContainer>

      <p>{children}</p>
    </S.IntroLabelContainer>
  )
}
