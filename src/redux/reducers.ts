import { combineReducers } from 'redux'
import { tasksReducer } from '@/redux/tasksReducer'
import { modalReducer } from '@/redux/modalReducer'
import { TaskState } from '@/redux/tasksReducer'
import { ModalState } from '@/redux/modalReducer'
export interface RootState {
  taskReducer: TaskState
  modalReducer: ModalState
}
export const rootReducer = combineReducers({
  taskReducer: tasksReducer,
  modalReducer: modalReducer
})
