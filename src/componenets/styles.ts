import styled from 'styled-components'

import { Props } from './FilterCard'

type PropsWithoutCountAndCaption = Omit<Props, 'count' | 'caption'>

export const Card = styled.div<PropsWithoutCountAndCaption>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#ffff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Count = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
