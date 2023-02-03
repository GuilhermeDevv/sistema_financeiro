import { useState } from 'react';

export function setListaFiltradaHook<T>(dados: T) {
  const [listaFiltrada, setListaFiltrada] = useState(dados);
  return { listaFiltrada, setListaFiltrada };
}
