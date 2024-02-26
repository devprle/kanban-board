import React, { useState } from 'react'
import styled from 'styled-components'
import {Status, Task} from "@/utils/data-tasks";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/redux/reducers";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  width: 24rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ModalTitle = styled.h2`
  text-align: center;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const ModalInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  border: 1px solid black;
  padding: 0.5rem;
`

const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const ModalButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`
const ColumnName = styled.span`
 text-transform: capitalize;
 color: red;
`

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
    dispatch({type: 'ADD_TASK', payload: newTask})
    dispatch({type: 'CLOSE_MODAL', payload:status})
  }


  const closeModal = () => {
      dispatch({type: 'CLOSE_MODAL'})
  }




  return (
    <>
      <Overlay />
      <ModalWrapper>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Create Task in "<ColumnName>{status.replace(/-/g, ' ')}</ColumnName>" Column</ModalTitle>
            <CloseButton onClick={closeModal}>×</CloseButton>
          </ModalHeader>
          <ModalInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ModalButtonsWrapper>
            <ModalButton onClick={closeModal}>Cancel</ModalButton>
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
