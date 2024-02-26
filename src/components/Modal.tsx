import React, { useState } from 'react'
import styled from 'styled-components'

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

const Modal = ({
  closeCreateModal,
  createNewTask
}: {
  closeCreateModal: () => void
  createNewTask: (title: string) => void
}) => {
  const [title, setTitle] = useState('')

  return (
    <>
      <Overlay />
      <ModalWrapper>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Create Task</ModalTitle>
            <CloseButton onClick={closeCreateModal}>×</CloseButton>
          </ModalHeader>
          <ModalInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ModalButtonsWrapper>
            <ModalButton onClick={closeCreateModal}>Cancel</ModalButton>
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
