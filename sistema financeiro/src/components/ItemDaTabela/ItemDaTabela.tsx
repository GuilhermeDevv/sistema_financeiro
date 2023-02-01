import React from 'react';
import { LinhaDaTabela, ColunaDaTabela, StylesCategoria } from './styles';
import { formatarData } from '../../utils/formatarData/formatarData';
import { Item } from '../../types/Items';

type Prop = {
  lista: Item;
};

export function ItemDaTabela({
  lista: { data, categoria, titulo, valor },
}: Prop) {
  return (
    <LinhaDaTabela>
      <ColunaDaTabela>{formatarData(data)}</ColunaDaTabela>
      <ColunaDaTabela>
        <StylesCategoria>{categoria}</StylesCategoria>
      </ColunaDaTabela>
      <ColunaDaTabela>{titulo}</ColunaDaTabela>
      <ColunaDaTabela>R${valor}</ColunaDaTabela>
    </LinhaDaTabela>
  );
}
