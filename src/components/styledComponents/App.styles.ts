import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  flex: 1;
  max-width: 39rem;
`
export const ColumnsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export const SearchInput = styled.input`
  align-self: end;
  margin-bottom: 1rem;
  height: 2rem;
  padding: 1rem;
  color: #102640;
  transition: 0.3s;
  border-radius: 4px;

  &:focus-visible {
    outline: none;
    -webkit-box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
    -moz-box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
    box-shadow: 2px 2px 7px 0 rgba(83, 91, 135, 1);
  }
`
