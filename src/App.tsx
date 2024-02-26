import './App.scss'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import TaskColumn from '@/components/TaskColumn'
import { RootState } from '@/redux/reducers'

import Modal from './components/Modal'
import { statuses, Task } from './utils/data-tasks'

const Container = styled.div`
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  align-items: center;
  width: 38rem;
`
const ColumnsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

const SearchInput = styled.input`
  align-self: end;
  margin-bottom: 1rem;
  height: 2rem;
  padding: 1rem;
`

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
