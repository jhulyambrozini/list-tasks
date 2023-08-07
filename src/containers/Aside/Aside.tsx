import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../componenets/FilterCard/FilterCard'
import * as Style from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Tasks'

const Aside = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <Style.Aside>
      <div>
        <Style.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <Style.Filters>
          <FilterCard
            value={enums.Status.PENDENTE}
            critery="status"
            caption="pendentes"
          />
          <FilterCard
            value={enums.Status.CONCLUIDA}
            critery="status"
            caption="concluídas"
          />
          <FilterCard
            value={enums.Priority.URGENTE}
            critery="prioridade"
            caption="urgentes"
          />
          <FilterCard
            value={enums.Priority.IMPORTANTE}
            critery="prioridade"
            caption="importantes"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            critery="prioridade"
            caption="normal"
          />
          <FilterCard critery="todas" caption="todas" />
        </Style.Filters>
      </div>
    </Style.Aside>
  )
}

export default Aside
