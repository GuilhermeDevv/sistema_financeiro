import { useState } from 'react';

export function setMesHook<T>(mesAtual: T) {
  const [mes, setMes] = useState(mesAtual);
  return { mes, setMes };
}
