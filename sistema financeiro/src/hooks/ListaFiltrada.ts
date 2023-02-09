import { useState } from 'react';

export function setFilteredListHook<T>(dados: T) {
  const [filteredList, setFilteredList] = useState(dados);
  return { filteredList, setFilteredList };
}
