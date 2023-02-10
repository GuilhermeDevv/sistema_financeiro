import React from 'react';
import { LinhaDaTabela, ColunaDaTabela, StylesCategoria } from './styles';
import { formatarData } from '../../utils/formatarData/formatarData';
import { Item } from '../../types/Items';

type Prop = {
  list: Item;
};

export function ItemDaTabela({ list: { data, category, title, value } }: Prop) {
  return (
    <LinhaDaTabela>
      <ColunaDaTabela>{formatarData(data)}</ColunaDaTabela>
      <ColunaDaTabela>
        <StylesCategoria>{category}</StylesCategoria>
      </ColunaDaTabela>
      <ColunaDaTabela>{title}</ColunaDaTabela>
      <ColunaDaTabela>R${value}</ColunaDaTabela>
    </LinhaDaTabela>
  );
}
