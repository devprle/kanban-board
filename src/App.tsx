import './App.scss'
import React from 'react'
import styled from 'styled-components'

import Modal from './components/Modal'
import TaskColumn from "@/components/TaskColumn";
import {statuses} from './utils/data-tasks'
import { useSelector} from "react-redux";
import {RootState} from "@/redux/reducers";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const App = () => {

  const isModalOpen = useSelector<RootState, boolean>(
      (state) => state.modalReducer.isModalOpen
  )

  return (
    <Container>
      <div className="flex divide-x">
        {statuses.map((status) => (
            <TaskColumn
                key={status}
                status={status}
            />
        ))}
      </div>
      {isModalOpen && (
        <Modal/>
      )}
    </Container>
  )
}

export default App
