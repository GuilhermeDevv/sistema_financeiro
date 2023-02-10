import React from 'react';
import { Table, TableHeadeColumn } from './styles';
import { Item } from '../../types/Items';
import { ItemDaTabela } from '../ItemDaTabela/ItemDaTabela';

type Prop = {
  list: Item[];
};

export function AreaDeTabela({ list }: Prop) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadeColumn>Data</TableHeadeColumn>
          <TableHeadeColumn>Categoria</TableHeadeColumn>
          <TableHeadeColumn>título</TableHeadeColumn>
          <TableHeadeColumn>valor</TableHeadeColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <ItemDaTabela key={index} lista={item} />
        ))}
      </tbody>
    </Table>
  );
}
