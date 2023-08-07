import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Tasks'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameters: 'status' | 'priority'
}

function returnBackgroundColor(props: TagProps): string {
  if (props.parameters === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.red
    if (props.priority === enums.Priority.IMPORTANTE) return variables.orange
    return variables.orange
  } else {
    if (props.status === enums.Status.PENDENTE) return variables.yellow
    if (props.status === enums.Status.CONCLUIDA) return variables.green
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monostace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`
export const ActionsBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const ButtonSalve = styled(Button)`
  background-color: ${variables.green};
`
export const ButtonCancelRemove = styled(Button)`
  background-color: ${variables.red};
`