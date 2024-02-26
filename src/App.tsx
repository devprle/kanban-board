import './App.scss'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TaskColumn from '@/components/TaskColumn'
import { RootState } from '@/redux/reducers'

import { ColumnsWrapper, Container, SearchInput } from './components/App.styles'
import Modal from './components/Modal'
import { statuses, Task } from './utils/data-tasks'

const App = () => {
  const dispatch = useDispatch()
  const tasks = useSelector<RootState, Task[]>(
    (state) => state.taskReducer.defaultTasks
  )
  const isModalOpen = useSelector<RootState, boolean>(
    (state) => state.modalReducer.isModalOpen
  )

  const filterTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTasks: Task[] = tasks.filter((task) =>
      task.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    dispatch({ type: 'SEARCH_TASK', payload: updatedTasks })
  }

  return (
    <Container>
      <SearchInput
        placeholder="Search tasks"
        onChange={(e) => filterTasks(e)}
        type="text"
      />
      <ColumnsWrapper>
        {statuses.map((status) => (
          <TaskColumn key={status} status={status} />
        ))}
      </ColumnsWrapper>
      {isModalOpen && <Modal />}
    </Container>
  )
}

export default App
