import { Task, tasks as initialTasks } from '../utils/data-tasks'

export interface TaskState {
  tasks: Task[]
}

type AddTask = { type: 'ADD_TASK'; payload: string }
type UpdateTask = { type: 'UPDATE_TASK'; payload: Task }

type DeleteTask = { type: 'DELETE_TASK'; payload: number }

type Action = AddTask | UpdateTask | DeleteTask
const initialState = {
  tasks: initialTasks
}
export const tasksReducer = (state: TaskState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK':
      return { ...state, tasks: action.payload }
    case 'DELETE_TASK':
      return { ...state, tasks: action.payload }

    default:
      return state
  }
}
