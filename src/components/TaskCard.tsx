import { useState } from 'react'
import styled from 'styled-components'

import { Task } from '@/utils/data-tasks'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/reducers'

const TaskCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  background-color: #f7fafc;
  padding: 6px 8px;
`
const TaskCardTitle = styled.div`
  text-align: center;
  line-height: 1;
`
const DeleteButton = styled.div`
  position: absolute;
  top: -3px;
  right: 5px;
  cursor: pointer;
  display: none;
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    font-weight: bold;
  }
  ${TaskCardWrapper}:hover & {
    display: block;
  }
`
const CardTextarea = styled.textarea`
  width: 100%;
`

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
    <TaskCardWrapper
      draggable
      onDoubleClick={() => setIsEditingTitle(true)}
      onDragStart={(e) => {
        e.dataTransfer.setData('id', String(task.id))
      }}
    >
      <DeleteButton onClick={() => deleteTask(task)}>×</DeleteButton>

      {isEditingTitle ? (
        <CardTextarea
          value={task.title}
          autoFocus
          onBlur={() => setIsEditingTitle(false)}
          onChange={(e) => updateTask({ ...task, title: e.target.value })}
        />
      ) : (
        <TaskCardTitle>{task.title}</TaskCardTitle>
      )}
    </TaskCardWrapper>
  )
}

export default TaskCard
