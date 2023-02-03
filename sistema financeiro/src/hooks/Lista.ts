import { useState } from 'react';
import { Item } from '../types/Items';

export function ListaHook(dados?: Item[]) {
  const [lista, setLista] = useState(dados);
  return { lista, setLista };
}
