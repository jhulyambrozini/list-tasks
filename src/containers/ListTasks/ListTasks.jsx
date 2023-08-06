import Task from '../../componenets/Task/Task'
import { Container } from './styles'

const ListTasks = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </Container>
)

export default ListTasks
