import * as Style from './styles'

const Task = () => (
  <Style.Card>
    <Style.Title>Nome da tarefa</Style.Title>
    <Style.Tag>importantes</Style.Tag>
    <Style.Tag>pendentes</Style.Tag>
    <Style.Description />
    <Style.ActionsBar>
      <Style.Button>Editar</Style.Button>
      <Style.Button>Remover</Style.Button>
    </Style.ActionsBar>
  </Style.Card>
)

export default Task
