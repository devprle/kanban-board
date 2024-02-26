import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/redux/reducers'
import { Status, Task } from '@/utils/data-tasks'

import {
  CloseButton,
  ColumnName,
  ModalButton,
  ModalButtonsWrapper,
  ModalContent,
  ModalHeader,
  ModalInput,
  ModalTitle,
  ModalWrapper,
  Overlay
} from './Modal.styles'

const Modal = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const tasks = useSelector<RootState, Task[]>(
    (state) => state.taskReducer.tasks
  )
  const status = useSelector<RootState, Status>(
    (state) => state.modalReducer.status || 'todo'
  )

  const createNewTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      status
    }
    dispatch({ type: 'ADD_TASK', payload: newTask })
    dispatch({ type: 'CLOSE_MODAL', payload: status })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      <Overlay />
      <ModalWrapper>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              Create Task in "
              <ColumnName>{status.replace(/-/g, ' ')}</ColumnName>" Column
            </ModalTitle>
            <CloseButton onClick={closeModal}>×</CloseButton>
          </ModalHeader>
          <ModalInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ModalButtonsWrapper>
            <ModalButton type="cancel" onClick={closeModal}>
              Cancel
            </ModalButton>
            <ModalButton onClick={() => createNewTask(title)}>
              Create
            </ModalButton>
          </ModalButtonsWrapper>
        </ModalContent>
      </ModalWrapper>
    </>
  )
}

export default Modal
