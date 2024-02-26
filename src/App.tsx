import './App.scss'
import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from './components/Modal'
import TaskColumn from "@/components/TaskColumn";
import {
  Status,
  statuses,
  Task,
} from './utils/data-tasks'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/reducers";

const Container = styled.div`
  display: flex;
  justify-content: center;
`



const App = () => {
  //const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const dispatch = useDispatch()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [status, setStatus] = useState<Status>('todo')

  const tasks = useSelector<RootState, Task[]>((state)=>state.taskReducer.tasks)
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      status,
      tasks: tasksInColumn
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t))
    dispatch({type: 'UPDATE_TASK', payload: updatedTasks})
  }

  const deleteTask = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id)
    dispatch({type: 'DELETE_TASK', payload: updatedTasks})

  }
  const createNewTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      status
    }

    dispatch({type: 'ADD_TASK', payload: newTask})
    setIsCreateModalOpen(false)
  }
  const openCreateModal = (status: Status) => {
    setStatus(status)
    setIsCreateModalOpen(true)
  }

  const closeCreateModal = () => {
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
            <TaskColumn
                key={column.status}
                column={column}
                openCreateModal={openCreateModal}
                handleDrop={handleDrop}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
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
