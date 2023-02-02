import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const Container = styled.div`
  background-color: ${colors.tertiary};
  box-shadow: 0px 0px 0.2rem #ccc;
  border-radius: 1rem;
  padding: 3rem;
  margin-top: -4rem;
`;
export const EscolherMes = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const SetaPraTras = styled.div`
  font-size: 2.5rem;
  animation: pulsar 1s linear infinite;

  &:hover {
    animation: none;
  }

  @keyframes pulsar {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const MesEscolhido = styled.strong`
  font-size: 1.5rem;
  cursor: default;

  text-transform: capitalize;
`;
export const SetaPraFrente = styled.div`
  font-size: 2.5rem;

  animation: pulsar 1s linear infinite;

  &:hover {
    animation: none;
  }
  @keyframes pulsar {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
