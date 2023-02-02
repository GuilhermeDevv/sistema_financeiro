import React from 'react';

//Types
import { InfoMenu } from '../../types/InfoMenu';
//Components
import { ContentCaixa } from './styles';
export function Caixa({ titulo = 'Receita', valor = 'R$ 2500' }: InfoMenu) {
  return (
    <ContentCaixa color={valor.includes('-') ? 'red' : 'black'}>
      <h2>{titulo}</h2>
      <span>{valor}</span>
    </ContentCaixa>
  );
}
