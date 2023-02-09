import { useState } from 'react';

export function setMonthHook<T>(mesAtual: T) {
  const [month, setMonth] = useState(mesAtual);
  return { month, setMonth };
}
