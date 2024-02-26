import styled from 'styled-components'

type Props = {
  status: string
}
export const TaskCardContainer = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
  -moz-box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
  box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
  width: 100px;
  height: 100px;
  padding: 6px 8px;
  background-color: ${(props) =>
    props.status === 'todo'
      ? '#56B1E5'
      : props.status === 'in-progress'
      ? '#E86B79'
      : '#4B5F74'};
  h3 {
    text-align: center;
    line-height: 1;
  }

  textarea {
    width: 100%;
  }
`

export const DeleteButton = styled.div`
  position: absolute;
  top: -3px;
  right: 5px;
  cursor: pointer;
  display: none;
  transition: 0.1s;

  &:hover {
    scale: 1.1;
    font-weight: bold;
  }

  ${TaskCardContainer}:hover & {
    display: block;
  }
`
