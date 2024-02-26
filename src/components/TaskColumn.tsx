import styled from 'styled-components'
import TaskCard from '@/components/TaskCard'
import React from 'react'
import { Task, Status } from '@/utils/data-tasks'

const ColumnWrapper = styled.div`
  width: 13rem;
`

const ColumnHeader = styled.div`
  position: relative;
  text-align: center;
`

const ColumnTitle = styled.h2`
  text-transform: capitalize;
`

const TaskCount = styled.div`
  font-size: 0.75rem;
`

const AddButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
`
const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const TaskColumn = ({
  column,
  openCreateModal,
  handleDrop,
  updateTask,
  deleteTask
}: {
  column: {
    status: Status
    tasks: Task[]
  }
  openCreateModal: (status: Status) => void
  handleDrop: (e: React.DragEvent<HTMLDivElement>, status: Status) => void
  updateTask: (task: Task) => void
  deleteTask: (task: Task) => void
}) => {
  return (
    <ColumnWrapper
      id={column.status}
      key={column.status}
      onDrop={(e) => handleDrop(e, column.status)}
      onDragOver={(e) => e.preventDefault()}
    >
      <ColumnHeader>
        <ColumnTitle>{column.status.replace(/-/g, ' ')}</ColumnTitle>
        <TaskCount>({column.tasks.length})</TaskCount>
        <AddButton onClick={() => openCreateModal(column.status)}>+</AddButton>
      </ColumnHeader>
      <TasksWrapper>
        {column.tasks.map((task) => (
          <TaskCard
            key={'task-' + task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </TasksWrapper>
    </ColumnWrapper>
  )
}
export default TaskColumn
