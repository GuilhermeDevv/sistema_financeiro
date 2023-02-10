import React, { useState, useEffect } from 'react';
//Components
import { Container, Content, Main } from './style';
import { Header } from '../../components/Header/Header';
import { AreaDeTabela } from '../../components/AreaDeTabela/AreaDeTabela';
import { AreaDeInfo } from '../../components/AreaDeInfo/AreaDeInfo';

//Data
import { items } from '../../data/items';
import { categoria } from '../../data/categoria';

//Types
import { Item } from '../../types/Items';

//utils
import {
  dateCurrent,
  filtrarListaPeloMes,
} from '../../utils/currentData/currentDate';

//Hooks
import { setListaHook } from '../../hooks/Lista';
import { setMonthHook } from '../../hooks/Mes';
import { setFilteredListHook } from '../../hooks/ListaFiltrada';
import { AlteracaoDoMes } from '../../components/AlteracaoDoMes/AlteracaoDoMes';

export function Home() {
  const { list, setList } = setListaHook();
  const { month, setMonth } = setMonthHook(dateCurrent());
  const { filteredList, setFilteredList } = setFilteredListHook<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filtrarListaPeloMes(list, month));
  }, [list, month]);

  useEffect(() => {
    setIncome(0);
    setExpense(0);
    let handlingValue = 0;
    const expenseCategory = categoria.filter((category) => category.despesa);

    for (const item of filteredList) {
      const value = item.value.split(', ');
      const formattedValue = +value[0].split(',').join('.');

      if (
        expenseCategory.some((category) => category.titulo === item.category)
      ) {
        handlingValue += formattedValue;
        setExpense(handlingValue);
      } else {
        setIncome(formattedValue);
      }
    }
  }, [filteredList]);

  function changeMonth(month: string) {
    setMonth(month);
  }
  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <AreaDeInfo
            changeMonth={changeMonth}
            currentMonth={month}
            income={income}
            expense={expense}
          />
          <AlteracaoDoMes items={items} setItems={setList} />
          <AreaDeTabela list={filteredList} />
        </Main>
      </Content>
    </Container>
  );
}
