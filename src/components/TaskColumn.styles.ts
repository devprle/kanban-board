import styled from 'styled-components'
type Props = {
  status: string
}
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: white;
`

export const ColumnHeader = styled.div<Props>`
  position: relative;
  padding: 1rem 0 0.5rem 0;
  text-align: center;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    props.status === 'todo'
      ? '#1A92DB'
      : props.status === 'in-progress'
      ? '#E22959'
      : '#102640'};

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 2rem;
  }
`
export const TasksWrapper = styled.div<Props>`
  display: flex;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-height: 22rem;
  background-color: ${(props) =>
    props.status === 'todo'
      ? '#BEE3F6'
      : props.status === 'in-progress'
      ? '#F5C2C3'
      : '#BBC3CB'};
`
