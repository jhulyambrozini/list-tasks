import FilterCard from '../../componenets/FilterCard/FilterCard'
import * as Style from './styles'

const Aside = () => (
  <Style.Aside>
    <div>
      <Style.Field type="text" placeholder="Buscar" />
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

export default Aside
