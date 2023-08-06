import * as Style from './styles'

export type Props = {
  active?: boolean
  count: number
  caption: string
}

const FilterCard = ({ active, count, caption }: Props) => (
  <Style.Card active={active}>
    <Style.Count>{count}</Style.Count>
    <Style.Label>{caption}</Style.Label>
  </Style.Card>
)

export default FilterCard
