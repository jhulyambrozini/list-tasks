import { useSelector } from 'react-redux'
import Task from '../../componenets/Task/Task'
import { Container } from './styles'

import { RootReducer } from '../../store'
const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let tasksFilter = itens
    if (term !== undefined) {
      tasksFilter = tasksFilter.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (critery === 'prioridade') {
        tasksFilter = tasksFilter.filter((item) => item.priority === value)
      } else if (critery === 'status') {
        tasksFilter = tasksFilter.filter((item) => item.status === value)
      }
      return tasksFilter
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
        <li>{critery}</li>
        <li>{value}</li>
      </ul>
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
