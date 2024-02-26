import { useState } from 'react'
import styled from 'styled-components'

import { Task } from '../utils/data-tasks'

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

const TaskCard = ({
  task,
  updateTask,
  deleteTask
}: {
  task: Task
  updateTask: (task: Task) => void
  deleteTask: (task: Task) => void
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false)

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
        <input
          autoFocus
          className="w-full"
          onBlur={() => setIsEditingTitle(false)}
          value={task.title}
          onChange={(e) => updateTask({ ...task, title: e.target.value })}
        />
      ) : (
        <div className="text-center">{task.title}</div>
      )}
    </TaskCardWrapper>
  )
}

export default TaskCard
