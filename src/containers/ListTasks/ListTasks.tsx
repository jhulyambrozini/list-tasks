import { useSelector } from 'react-redux'
import Task from '../../componenets/Task/Task'

import { RootReducer } from '../../store'
import { MainContainer, Title } from '../../styles'

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

  const displayFilterResult = (qntd: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''
    if (critery === 'todas') {
      message = `${qntd} tarefa(s) encontrada(s) com: todas ${complement}`
    } else {
      message = `${qntd} tarefa(s) encontrada(s) com: "${`${critery} = ${value}`}" ${complement}`
    }
    return message
  }

  return (
    <MainContainer>
      <Title as="p">{displayFilterResult(filterTasks().length)}</Title>
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
    </MainContainer>
  )
}

export default ListTasks
