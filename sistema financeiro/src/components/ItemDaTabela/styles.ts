import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';
export const LinhaDaTabela = styled.tr``;

export const ColunaDaTabela = styled.td`
  font-size: clamp(10px, 4vw, 20px);
  font-weight: bold;
  padding: 0.5rem 0px;
`;
export const StylesCategoria = styled.div`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 0.5rem 1rem;
  display: inline-block;
  border-radius: 0.5rem;
`;
