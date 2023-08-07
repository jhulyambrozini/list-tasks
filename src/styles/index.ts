import { createGlobalStyle, styled } from 'styled-components'
import variables from './variables'

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

  @media (max-width: 426px) {
    display: block;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.p`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 426px) {
    margin: 30px 0;
  }
`
export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  border-radius: 8px;
  margin-right: 8px;
`
export const ButtonSalve = styled(Button)`
  background-color: ${variables.green};
`
