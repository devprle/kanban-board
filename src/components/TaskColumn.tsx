import styled from 'styled-components'
import TaskCard from '@/components/TaskCard'
import React from 'react'
import { Task, Status } from '@/utils/data-tasks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

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
  status,
}: {
  status: Status
}) => {
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
    console.log('handleDrop id:', id)
    const task = tasks.find((task) => String(task.id) === id)

    if (task) {
      const updatedTask = {...task, status}
      const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t))
      dispatch({type: 'UPDATE_TASK', payload: updatedTasks})
    }
  }




  return (
    <ColumnWrapper
      onDrop={(e) => handleDrop(e, status)}
      onDragOver={(e) => e.preventDefault()}
    >
      <ColumnHeader>
        <ColumnTitle>{status.replace(/-/g, ' ')}</ColumnTitle>
        <TaskCount>({tasksInColumn.length})</TaskCount>
        <AddButton onClick={() => openModal(status)}>+</AddButton>
      </ColumnHeader>
      <TasksWrapper>
        {tasksInColumn.map((task) => (
          <TaskCard
            key={'task-' + task.id}
            task={task}
          />
        ))}
      </TasksWrapper>
    </ColumnWrapper>
  )
}
export default TaskColumn
