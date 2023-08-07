import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../componenets/FilterCard/FilterCard'
import * as Style from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

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
          <FilterCard caption="pendentes" count={2} />
          <FilterCard caption="concluídas" count={2} />
          <FilterCard caption="urgentes" count={2} />
          <FilterCard caption="importantes" count={2} />
          <FilterCard caption="normal" count={2} />
          <FilterCard caption="todas" count={2} active />
        </Style.Filters>
      </div>
    </Style.Aside>
  )
}

export default Aside
