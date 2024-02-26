import {Status} from "@/utils/data-tasks";

export interface ModalState {
  isModalOpen: boolean
  status?: Status
}

type OpenModal = { type: 'OPEN_MODAL'; payload: Status }
type CloseModal = { type: 'CLOSE_MODAL'; payload: Status}

type Action = OpenModal | CloseModal

const initialState = {
    isModalOpen: false,
    status: undefined
}
export const modalReducer = (
    state:ModalState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, status: action.payload }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    default:
      return state
  }
}
