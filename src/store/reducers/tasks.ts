import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TaskClass from '../../models/Task'
import * as enums from '../../utils/enums/Tasks'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    itens: [
      new TaskClass(
        'Estudar Typescript',
        enums.Priority.IMPORTANTE,
        enums.Status.PENDENTE,
        '',
        1
      ),
      new TaskClass(
        'Estudar React',
        enums.Priority.URGENTE,
        enums.Status.CONCLUIDA,
        'Rever aulas do modulo',
        2
      ),
      new TaskClass(
        'Estudar',
        enums.Priority.NORMAL,
        enums.Status.PENDENTE,
        'praticar conteudos',
        3
      )
    ]
  },
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((t) => t.id !== action.payload)
    },
    edit: (state, action: PayloadAction<TaskClass>) => {
      const indexOfTask = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexOfTask >= 0) {
        state.itens[indexOfTask] = action.payload
      }
    }
  }
})

export const { remove, edit } = tasksSlice.actions
export default tasksSlice.reducer
