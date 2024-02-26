import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DeleteButton, TaskCardContainer } from '@/components/TaskCard.styles'
import { RootState } from '@/redux/reducers'
import { Task } from '@/utils/data-tasks'

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch()
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const tasks = useSelector<RootState, Task[]>(
    (state) => state.taskReducer.tasks
  )
  const deleteTask = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id)
    dispatch({ type: 'DELETE_TASK', payload: updatedTasks })
  }
  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t))
    dispatch({ type: 'UPDATE_TASK', payload: updatedTasks })
  }

  return (
    <TaskCardContainer
      status={task.status}
      draggable
      onDoubleClick={() => setIsEditingTitle(true)}
      onDragStart={(e) => {
        e.dataTransfer.setData('id', String(task.id))
      }}
    >
      <DeleteButton onClick={() => deleteTask(task)}>×</DeleteButton>

      {isEditingTitle ? (
        <textarea
          value={task.title}
          autoFocus
          onBlur={() => setIsEditingTitle(false)}
          onChange={(e) => updateTask({ ...task, title: e.target.value })}
        />
      ) : (
        <h3>{task.title}</h3>
      )}
    </TaskCardContainer>
  )
}

export default TaskCard
