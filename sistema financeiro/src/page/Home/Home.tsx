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

export function Home() {
  const [lista, setLista] = useState(items);
  const [mes, setMes] = useState(dateCurrent);
  const [listaFiltrada, setListaFiltrada] = useState<Item[]>([]);

  useEffect(() => {
    setListaFiltrada(filtrarListaPeloMes(lista, mes));
  }, [lista, mes]);

  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <AreaDeInfo />
          <AreaDeTabela lista={listaFiltrada} />
        </Main>
      </Content>
    </Container>
  );
}
