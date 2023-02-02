import React from 'react';
import {
  Container,
  EscolherMes,
  SetaPraTras,
  MesEscolhido,
  SetaPraFrente,
} from './styles';

export function AreaDeInfo() {
  return (
    <Container>
      <EscolherMes>
        <SetaPraTras>&#129092;</SetaPraTras>
        <MesEscolhido>Outubro 2023</MesEscolhido>
        <SetaPraFrente>&#129094;</SetaPraFrente>
      </EscolherMes>
    </Container>
  );
}
