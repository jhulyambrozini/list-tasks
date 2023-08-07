import { useDispatch, useSelector } from 'react-redux'
import * as Style from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Tasks'
import { RootReducer } from '../../store'

export type Props = {
  caption: string
  critery: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ caption, critery, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const verifyStateActive = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.value === value

    return sameCritery && sameValue
  }

  const filterValues = () => {
    dispatch(
      changeFilter({
        critery,
        value
      })
    )
  }

  const countTasks = () => {
    if (critery === 'todas') return tasks.itens.length
    if (critery === 'prioridade') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (critery === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }
  return (
    <Style.Card active={verifyStateActive()} onClick={filterValues}>
      <Style.Count>{countTasks()}</Style.Count>
      <Style.Label>{caption}</Style.Label>
    </Style.Card>
  )
}

export default FilterCard
