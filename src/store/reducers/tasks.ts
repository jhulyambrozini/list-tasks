import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TaskClass from '../../models/Task'
import * as enums from '../../utils/enums/Tasks'

type TarefasState = {
  itens: TaskClass[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      desc: 'Estudar JavaScript revendo o exercício do módulo 7',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      title: 'Estudar JavaScript'
    },
    {
      id: 2,
      desc: 'Estudar material de apoio',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      title: 'Estudar TypeScript'
    },
    {
      id: 3,
      desc: 'Praticar a construção de uma landing page',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      title: 'Estudar Bootstrap'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((t) => t.id !== action.payload)]
    },
    edit: (state, action: PayloadAction<TaskClass>) => {
      const indexOfTask = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexOfTask >= 0) {
        state.itens[indexOfTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<TaskClass, 'id'>>) => {
      const taskAlredyExist = state.itens.find(
        (t) => t.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskAlredyExist) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; isFinished: boolean }>
    ) => {
      const indexOfTask = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexOfTask >= 0) {
        state.itens[indexOfTask].status = action.payload.isFinished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
