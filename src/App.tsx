import Aside from './containers/Aside/Aside'
import ListTasks from './containers/ListTasks/ListTasks'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Aside />
        <ListTasks />
      </Container>
    </>
  )
}

export default App
