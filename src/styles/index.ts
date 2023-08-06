import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, san-serif;
  list-style: none;
}
`
export default GlobalStyle

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
