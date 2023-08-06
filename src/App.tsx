import Aside from './containers/Aside/Aside'
import Main from './containers/Main/Main'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Aside />
        <Main />
      </Container>
    </>
  )
}

export default App
