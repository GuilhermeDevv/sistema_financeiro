import React, { useEffect, useState } from 'react';
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
import { Props } from '../../types/MesAtual';

//Utils
import { formatarMes } from '../../utils/formatarMes/formatarMes';

export function AreaDeInfo({ mesAtual, alteracaoMes, despesa, renda }: Props) {
  const [infoItem, setInfoItem] = useState<
    Array<{
      categoria: string;
      valor: string;
    }>
  >([]);

  useEffect(() => {
    const dados = [
      { categoria: 'Receita', valor: String(renda) },
      { categoria: 'Despesa', valor: String(despesa) },
      { categoria: 'Balanço', valor: String(renda + despesa) },
    ];
    setInfoItem(dados);
  }, [despesa, renda]);

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
      {infoItem.map((item, i) => (
        <Caixa key={i} titulo={item.categoria} valor={item.valor} />
      ))}
    </Container>
  );
}
