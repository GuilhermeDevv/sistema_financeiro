import React from 'react';
//Components Styles
import {
  Container,
  EscolherMes,
  SetaPraTras,
  MesEscolhido,
  SetaPraFrente,
} from './styles';

//Components
import { Caixa } from '../InfoReutilizavel/Caixa';

export function AreaDeInfo() {
  const nomesInfo = ['Receita', 'Despesa', 'Balanço'];

  return (
    <Container>
      <EscolherMes>
        <SetaPraTras>&#129092;</SetaPraTras>
        <MesEscolhido>Outubro 2023</MesEscolhido>
        <SetaPraFrente>&#129094;</SetaPraFrente>
      </EscolherMes>
      {nomesInfo.map((text, i) => (
        <Caixa key={i} titulo={text} valor="" />
      ))}
    </Container>
  );
}
