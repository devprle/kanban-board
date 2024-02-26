import styled from 'styled-components'
interface ButtonProps {
  type?: string
}
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const ModalContent = styled.div`
  width: 24rem;
  background-color: #102640;
  border-radius: 0.5rem;
  padding: 1.5rem;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ModalTitle = styled.h2`
  text-align: center;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  transform: translateY(-1rem);
`

export const ModalInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  border-radius: 4px;
  padding: 0.5rem;
  transition: 0.3s;
  &:focus-visible {
    outline: none;
    -webkit-box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
    -moz-box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
    box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
  }
  color: #102640;
`

export const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

export const ModalButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.type === 'cancel' ? '#E22959' : '#1A92DB'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`
export const ColumnName = styled.span`
  text-transform: capitalize;
  font-weight: bold;
`
