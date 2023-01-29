import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const Table = styled.table`
  width: 100%;
  background-color: ${colors.primary};
  padding: 2rem;
  box-shadow: 0px 0px 0.5rem ${colors.secondary};
  border-radius: 1rem;
  margin-top: 2rem;
`;

export const TableHeadeColumn = styled.th`
  padding: 1rem 0px;
  text-transform: uppercase;
  text-align: start;
  font-size: 1.5rem;

  cursor: pointer;
`;
