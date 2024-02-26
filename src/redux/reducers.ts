import { combineReducers } from 'redux'

import { modalReducer } from '@/redux/modalReducer'
import { ModalState } from '@/redux/modalReducer'
import { tasksReducer } from '@/redux/tasksReducer'
import { TaskState } from '@/redux/tasksReducer'
export interface RootState {
  taskReducer: TaskState
  modalReducer: ModalState
}
export const rootReducer = combineReducers({
  taskReducer: tasksReducer,
  modalReducer: modalReducer
})
