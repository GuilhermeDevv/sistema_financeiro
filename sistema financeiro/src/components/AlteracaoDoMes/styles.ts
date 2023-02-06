import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const ContainerAlteracaoMes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  align-items: center;
  margin: 10px 0px;

  gap: 2rem;
  width: 100%;
  border: solid 1px black;

  border-radius: 1rem;
  padding: 3rem;
  & div {
    display: flex;
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 2px 3px;
  border: solid 1px black;
  border-radius: 0.5rem;
`;
export const Input = styled.input`
  padding: 2px 3px;
  max-width: 150px;
  border: solid 1px black;
  border-radius: 0.5rem;
`;
export const Send = styled.button`
  padding: 1rem 3rem;
  border: solid 1px black;
  border-radius: 0.5rem;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
