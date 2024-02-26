import './App.scss'
import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from './components/Modal'
import TaskCard from './components/TaskCard'
import {
  Status,
  statuses,
  Task,
  tasks as initialTasks
} from './utils/data-tasks'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

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

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [status, setStatus] = useState<Status>('todo')

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      status,
      tasks: tasksInColumn
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t))
    setTasks(updatedTasks)
  }

  const deleteTask = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id)
    setTasks(updatedTasks)
  }

  const openCreateModal = (status: Status) => {
    setStatus(status)
    setIsCreateModalOpen(true)
  }

  const closeCreateModal = () => {
    setIsCreateModalOpen(false)
  }

  const createNewTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      status
    }
    setTasks([...tasks, newTask])
    setIsCreateModalOpen(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('id')
    const task = tasks.find((task) => String(task.id) === id)
    if (task) {
      updateTask({ ...task, status })
    }
  }

  return (
    <Container>
      <div className="flex divide-x">
        {columns.map((column) => (
          <ColumnWrapper
            id={column.status}
            key={column.status}
            onDrop={(e) => handleDrop(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
          >
            <ColumnHeader>
              <ColumnTitle>{column.status.replace(/-/g, ' ')}</ColumnTitle>
              <TaskCount>({column.tasks.length})</TaskCount>
              <AddButton onClick={() => openCreateModal(column.status)}>
                +
              </AddButton>
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
        ))}
      </div>
      {isCreateModalOpen && (
        <Modal
          closeCreateModal={closeCreateModal}
          createNewTask={createNewTask}
        />
      )}
    </Container>
  )
}

export default App
