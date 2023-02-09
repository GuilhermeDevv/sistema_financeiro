import { useState } from 'react';
import { Item } from '../types/Items';

export function setListaHook() {
  const [lista, setLista] = useState<Item[]>([]);
  return { lista, setLista };
}
