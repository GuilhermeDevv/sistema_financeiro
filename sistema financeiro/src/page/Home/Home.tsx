import React from 'react';
//Components
import { Container, Content, Header, Title, Main } from './style';

//Data
import { items } from '../../data/items';
import { categoria } from '../../data/categoria';

//Types
import { Item } from '../../types/Items';
import { Categorias } from '../../types/Categorias';

export function Home() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Sistema financeiro</Title>
        </Header>
        <Main>.</Main>
      </Content>
    </Container>
  );
}
