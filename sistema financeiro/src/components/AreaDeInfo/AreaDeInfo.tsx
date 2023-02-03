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
//Types
import { MesAtual } from '../../types/MesAtual';

//Utils
import { formatarMes } from '../../utils/formatarMes/formatarMes';
export function AreaDeInfo({ mesAtual }: MesAtual) {
  const nomesInfo = ['Receita', 'Despesa', 'Balanço'];

  return (
    <Container>
      <EscolherMes>
        <SetaPraTras>&#129092;</SetaPraTras>
        <MesEscolhido>{formatarMes(mesAtual)}</MesEscolhido>
        <SetaPraFrente>&#129094;</SetaPraFrente>
      </EscolherMes>
      {nomesInfo.map((text, i) => (
        <Caixa key={i} titulo={text} valor="" />
      ))}
    </Container>
  );
}
