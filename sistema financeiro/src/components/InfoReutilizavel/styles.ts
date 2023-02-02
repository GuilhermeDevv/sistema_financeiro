import styled from 'styled-components';

export const ContentCaixa = styled.div`
  text-align: center;

  & h2 {
    text-transform: capitalize;
    font-weight: 700;
  }
  & span {
    font-size: 1.3rem;
    color: ${({ color }) => color};
  }
`;
