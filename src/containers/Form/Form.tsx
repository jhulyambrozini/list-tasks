import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSalve, Field, MainContainer, Title } from '../../styles'
import { Form as FormStyles, Options, Option } from './styles'
import * as enums from '../../utils/enums/Tasks'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [statePriority, setStatePriority] = useState(enums.Priority.NORMAL)

  const createTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        title,
        priority: statePriority,
        status: enums.Status.PENDENTE,
        desc
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormStyles onSubmit={createTask}>
        <Field
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Field
          as="textarea"
          placeholder="Descrição da tarefa"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Options>
          <p>Prioridade:</p>

          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                type="radio"
                name="priority"
                id={priority}
                value={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={(e) =>
                  setStatePriority(e.target.value as enums.Priority)
                }
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <ButtonSalve type="submit">Criar tarefa</ButtonSalve>
      </FormStyles>
    </MainContainer>
  )
}

export default Form
