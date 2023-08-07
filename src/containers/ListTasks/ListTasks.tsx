import { useSelector } from 'react-redux'
import Task from '../../componenets/Task/Task'
import { Container } from './styles'

import { RootReducer } from '../../store'
const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        {filterTasks().map((t) => (
          <li key={t.id}>
            <Task
              id={t.id}
              desc={t.desc}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListTasks
