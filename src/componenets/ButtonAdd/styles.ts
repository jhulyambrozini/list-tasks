import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  color: #fff;
  background-color: ${variables.green};
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-decoration: none;
`
