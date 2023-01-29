import React from 'react';
import { Table, TableHeadeColumn } from './styles';
import { Item } from '../../types/Items';
import { ItemDaTabela } from '../ItemDaTabela/ItemDaTabela';

type Prop = {
  lista: Item[];
};

export function AreaDeTabela({ lista }: Prop) {
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
        {lista.map((item, index) => (
          <ItemDaTabela key={index} lista={item} />
        ))}
      </tbody>
    </Table>
  );
}
