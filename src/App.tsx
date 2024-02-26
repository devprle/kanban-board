import './App.scss'

import { useState } from 'react'

import TaskCard from './components/TaskCard'
import Modal from "./components/Modal";
import {
  Status,
  statuses,
  Task,
  tasks as initialTasks
} from './utils/data-tasks'

function App() {
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
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
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
    <div className="flex justify-center">
      <div className="flex divide-x">
        {columns.map((column) => (
          <div
              id={column.status}
            className="w-52"
            key={column.status}
            onDrop={(e) => handleDrop(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="text-center relative">
              <h2 className="capitalize">{column.status.replace(/-/g, ' ')}</h2>
              <div>({column.tasks.length})</div>
              <div onClick={()=>openCreateModal(column.status)} className='absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 font-bold text-2xl'>+</div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              {column.tasks.map((task) => (
                <TaskCard
                  key={'task-' + task.id}
                  task={task}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {isCreateModalOpen && <Modal closeCreateModal={closeCreateModal}  createNewTask={createNewTask}/>}

    </div>
  )
}

export default App
