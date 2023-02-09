import { useState } from 'react';
import { Item } from '../types/Items';

export function setListaHook() {
  const [list, setList] = useState<Item[]>([]);
  return { list, setList };
}
