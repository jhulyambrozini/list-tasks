import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Style from './styles'
import { remove, edit } from '../../store/reducers/tasks'

import TaskClass from '../../models/Task'

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
  return (
    <Style.Card>
      <Style.Title>{title}</Style.Title>
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
            <Style.ButtonSalve
              onClick={() => {
                dispatch(edit({ desc, priority, status, title, id }))
                setIsEditing(false)
              }}
            >
              Salvar
            </Style.ButtonSalve>
            <Style.ButtonCancelRemove onClick={cancelEdition}>
              Cancelar
            </Style.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Style.Button onClick={() => setIsEditing(true)}>
              Editar
            </Style.Button>
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
