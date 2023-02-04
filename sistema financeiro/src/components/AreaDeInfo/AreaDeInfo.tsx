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
import { MesAtual, AlteracaoMesFn } from '../../types/MesAtual';

//Utils
import { formatarMes } from '../../utils/formatarMes/formatarMes';

export function AreaDeInfo({
  mesAtual,
  alteracaoMes,
}: MesAtual | AlteracaoMesFn) {
  //
  const nomesInfo = ['Receita', 'Despesa', 'Balanço'];
  function mesAnterior() {
    const [ano, mes] = mesAtual.split('/');
    const data = new Date(+ano, +mes - 1);
    data.setMonth(data.getMonth() - 1);
    alteracaoMes(`${data.getFullYear()}/${data.getMonth() + 1}`);
  }

  function mesSucessor() {
    const [ano, mes] = mesAtual.split('/');
    const data = new Date(+ano, +mes - 1);
    data.setMonth(data.getMonth() + 1);
    alteracaoMes(`${data.getFullYear()}/${data.getMonth() + 1}`);
  }
  return (
    <Container>
      <EscolherMes>
        <SetaPraTras
          onClick={() => {
            mesAnterior();
          }}
        >
          &#129092;
        </SetaPraTras>
        <MesEscolhido>{formatarMes(mesAtual)}</MesEscolhido>
        <SetaPraFrente
          onClick={() => {
            mesSucessor();
          }}
        >
          &#129094;
        </SetaPraFrente>
      </EscolherMes>
      {nomesInfo.map((text, i) => (
        <Caixa key={i} titulo={text} valor="" />
      ))}
    </Container>
  );
}
