import { Task, tasks as initialTasks } from '../utils/data-tasks'

export interface TaskState {
  defaultTasks: Task[]
  tasks: Task[]
}

type AddTask = { type: 'ADD_TASK'; payload: string }
type UpdateTask = { type: 'UPDATE_TASK'; payload: Task }
type DeleteTask = { type: 'DELETE_TASK'; payload: number }
type SearchTask = { type: 'SEARCH_TASK'; payload: string }

type Action = AddTask | UpdateTask | DeleteTask | SearchTask
const initialState = {
  defaultTasks: initialTasks,
  tasks: initialTasks
}
export const tasksReducer = (
  state: TaskState = initialState,
  action: Action
) => {
  let newData
  switch (action.type) {
    case 'ADD_TASK':
      newData = {
        ...state,
        tasks: [...state.tasks, action.payload],
        defaultTasks: [...state.defaultTasks, action.payload]
      }
      localStorage.setItem('tasksData', JSON.stringify(newData))
      return newData
    case 'UPDATE_TASK':
      newData = {
        ...state,
        tasks: action.payload,
        defaultTasks: action.payload
      }
      localStorage.setItem('tasksData', JSON.stringify(newData.defaultTasks))
      return newData
    case 'DELETE_TASK':
      newData = {
        ...state,
        tasks: action.payload,
        defaultTasks: action.payload
      }
      localStorage.setItem('tasksData', JSON.stringify(newData.defaultTasks))
      return newData
    case 'SEARCH_TASK':
      return { ...state, tasks: action.payload }
    default:
      return state
  }
}
