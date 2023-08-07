import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Style from './styles'
import { remove, edit, changeStatus } from '../../store/reducers/tasks'

import TaskClass from '../../models/Task'
import { Button, ButtonSalve } from '../../styles'
import * as enums from '../../utils/enums/Tasks'

type Props = TaskClass

const Task = ({ title, priority, status, desc, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDesc] = useState('')

  useEffect(() => {
    if (desc.length > 0) {
      setDesc(desc)
    }
  }, [desc])

  const cancelEdition = () => {
    setIsEditing(false)
    setDesc(desc)
  }

  const changeStatusTask = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus({ id, isFinished: e.target.checked }))
  }
  return (
    <Style.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatusTask}
        />
        <Style.Title>
          {' '}
          {isEditing && <em>Editando: </em>}
          {title}
        </Style.Title>
      </label>
      <Style.Tag parameters="priority" priority={priority}>
        {priority}
      </Style.Tag>
      <Style.Tag parameters="status" status={status}>
        {status}
      </Style.Tag>
      <Style.Description
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        disabled={!isEditing}
      />
      <Style.ActionsBar>
        {isEditing ? (
          <>
            <ButtonSalve
              onClick={() => {
                dispatch(edit({ desc, priority, status, title, id }))
                setIsEditing(false)
              }}
            >
              Salvar
            </ButtonSalve>
            <Style.ButtonCancelRemove onClick={cancelEdition}>
              Cancelar
            </Style.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <Style.ButtonCancelRemove onClick={() => dispatch(remove(id))}>
              Remover
            </Style.ButtonCancelRemove>
          </>
        )}
      </Style.ActionsBar>
    </Style.Card>
  )
}

export default Task
