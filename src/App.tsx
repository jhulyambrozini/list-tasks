import { Provider } from 'react-redux'
import Aside from './containers/Aside/Aside'
import ListTasks from './containers/ListTasks/ListTasks'
import GlobalStyle, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Aside />
        <ListTasks />
      </Container>
    </Provider>
  )
}

export default App
