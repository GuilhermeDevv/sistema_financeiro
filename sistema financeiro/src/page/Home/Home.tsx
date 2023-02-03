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

export function Home() {
  const { lista, setLista } = setListaHook(items);
  const { mes, setMes } = setMesHook(dateCurrent());
  const { listaFiltrada, setListaFiltrada } = setListaFiltradaHook<Item[]>([]);

  useEffect(() => {
    setListaFiltrada(filtrarListaPeloMes(lista, mes));
  }, [lista, mes]);

  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <AreaDeInfo mesAtual={''} />
          <AreaDeTabela lista={listaFiltrada} />
        </Main>
      </Content>
    </Container>
  );
}
