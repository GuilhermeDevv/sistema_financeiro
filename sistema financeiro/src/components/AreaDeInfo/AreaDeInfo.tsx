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

export function AreaDeInfo({
  currentMonth,
  changeMonth,
  income,
  expense,
}: Props) {
  const [itemInformation, setItemInformation] = useState<
    Array<{
      categoria: string;
      valor: string;
    }>
  >([]);

  useEffect(() => {
    const data = [
      { categoria: 'Receita', valor: String(income) },
      { categoria: 'Despesa', valor: String(expense) },
      { categoria: 'Balanço', valor: String(income + expense) },
    ];
    setItemInformation(data);
  }, [expense, income]);

  function changeMonthHelper(offset: number) {
    const [year, month] = currentMonth.split('/');
    const data = new Date(+year, +month - 1);
    data.setMonth(data.getMonth() + offset);
    changeMonth(`${data.getFullYear()}/${data.getMonth() + 1}`);
  }
  function lastMonth() {
    changeMonthHelper(-1);
  }

  function nextMonth() {
    changeMonthHelper(1);
  }

  return (
    <Container>
      <EscolherMes>
        <SetaPraTras
          onClick={() => {
            lastMonth();
          }}
        >
          &#129092;
        </SetaPraTras>
        <MesEscolhido>{formatarMes(currentMonth)}</MesEscolhido>
        <SetaPraFrente
          onClick={() => {
            nextMonth();
          }}
        >
          &#129094;
        </SetaPraFrente>
      </EscolherMes>
      {itemInformation.map((item, i) => (
        <Caixa key={i} titulo={item.categoria} valor={item.valor} />
      ))}
    </Container>
  );
}
