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
import { Categorias } from '../../types/Categorias';

//utils
import {
  dateCurrent,
  filtrarListaPeloMes,
} from '../../utils/currentData/currentDate';

//Hooks
import { setListaHook } from '../../hooks/Lista';
import { setMesHook } from '../../hooks/Mes';
import { setListaFiltradaHook } from '../../hooks/ListaFiltrada';
import { AlteracaoDoMes } from '../../components/AlteracaoDoMes/AlteracaoDoMes';

export function Home() {
  const { lista, setLista } = setListaHook(items);
  const { mes, setMes } = setMesHook(dateCurrent());
  const { listaFiltrada, setListaFiltrada } = setListaFiltradaHook<Item[]>([]);
  const [renda, setRenda] = useState(0);
  const [despesa, setDespesa] = useState(0);

  useEffect(() => {
    setListaFiltrada(filtrarListaPeloMes(lista, mes));
  }, [lista, mes]);

  useEffect(() => {
    setRenda(0);
    setDespesa(0);
    let valorTemporario = 0;
    const categoriaDeDespesas = categoria.filter((c) => c.despesa);

    for (const item of listaFiltrada) {
      const valor = item.valor.split(', ');
      const valorFormatado = +valor[0].split(',').join('.');

      if (categoriaDeDespesas.some((c) => c.titulo === item.categoria)) {
        valorTemporario += valorFormatado;
        setDespesa(valorTemporario);
      } else {
        setRenda(valorFormatado);
      }
    }
  }, [listaFiltrada]);

  function alteracaoMesFn(novoMes: string) {
    setMes(novoMes);
  }
  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <AreaDeInfo
            alteracaoMes={alteracaoMesFn}
            mesAtual={mes}
            renda={renda}
            despesa={despesa}
          />
          <AlteracaoDoMes fnMes={setMes} />
          <AreaDeTabela lista={listaFiltrada} />
        </Main>
      </Content>
    </Container>
  );
}
