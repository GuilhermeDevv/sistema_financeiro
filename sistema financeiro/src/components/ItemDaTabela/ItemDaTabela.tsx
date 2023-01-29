import React from 'react';
import { LinhaDaTabela, ColunaDaTabela } from './styles';
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
      <ColunaDaTabela>{categoria}</ColunaDaTabela>
      <ColunaDaTabela>{titulo}</ColunaDaTabela>
      <ColunaDaTabela>R${valor}</ColunaDaTabela>
    </LinhaDaTabela>
  );
}
/*
  <td>
              {JSON.stringify(
                `${item.data.getDate()}/${item.data.getFullYear()}`,
              ).split('"')}
            </td>
            <td>{item.categoria}</td>
            <td>{item.titulo}</td>
            <td>{item.valor}</td> */
