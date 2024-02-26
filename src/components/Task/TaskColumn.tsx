import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/redux/reducers'
import { Status, Task } from '@/utils/data-tasks'

import {
  ColumnHeader,
  ColumnWrapper,
  TasksWrapper
} from '../styledComponents/TaskColumn.styles'
import TaskCard from './TaskCard'

const TaskColumn = ({ status }: { status: Status }) => {
  const dispatch = useDispatch()

  const tasks = useSelector<RootState, Task[]>(
    (state) => state.taskReducer.tasks
  )
  const tasksInColumn = tasks.filter((task) => task.status === status)
  const openModal = (status: Status) => {
    dispatch({ type: 'OPEN_MODAL', payload: status })
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('id')
    const task = tasks.find((task) => String(task.id) === id)

    if (task) {
      const updatedTask = { ...task, status }
      const updatedTasks = tasks.map((t) =>
        t.id === task.id ? updatedTask : t
      )
      dispatch({ type: 'UPDATE_TASK', payload: updatedTasks })
    }
  }

  return (
    <ColumnWrapper
      onDrop={(e) => handleDrop(e, status)}
      onDragOver={(e) => e.preventDefault()}
    >
      <ColumnHeader status={status}>
        <h2>{status.replace(/-/g, ' ')}</h2>
        <h3>({tasksInColumn.length})</h3>
        <button onClick={() => openModal(status)}>+</button>
      </ColumnHeader>
      <TasksWrapper status={status}>
        {tasksInColumn.map((task) => (
          <TaskCard key={'task-' + task.id} task={task} />
        ))}
      </TasksWrapper>
    </ColumnWrapper>
  )
}
export default TaskColumn
