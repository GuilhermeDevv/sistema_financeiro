import { useState } from 'react';
import { categoria } from '../../data/categoria';
import { Item } from '../../types/Items';
import { formatarMes } from '../../utils/formatarMes/formatarMes';

import { ContainerAlteracaoMes, Input, Select, Send } from './styles';

type Props = {
  items: Item[];
  setItems: (v: Item[]) => void;
};

export function AlteracaoDoMes({ items, setItems }: Props) {
  const [dataSelecionada, setDataSelecionada] = useState<Date>();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState('');

  const categoryKeys: string[] = Object.keys(categoria);
  function setarData(value: string): void {
    const data = new Date();
    setDataSelecionada(data);
  }
  function setarCategoria(categoria: string) {
    setCategoriaSelecionada(categoria);
  }
  function setarTitulo(titulo: string) {
    setTitulo(titulo);
  }
  function setarValor(valor: string) {
    setValor(valor);
  }
  function send<T extends Item>({ data, categoria, titulo, valor }: T) {
    if (!data || !categoria || !titulo || !valor) {
      alert('Algum campo está vazio/valor incorreto.');
      return;
    }
    console.log(items);
    items.push({
      data: dataSelecionada,
      categoria: categoriaSelecionada,
      titulo,
      valor,
    });
    setItems([...items]);
  }

  return (
    <ContainerAlteracaoMes>
      <div>
        <label>DATA</label>
        <Input type="date" onChange={(e) => setarData(e.target.value)} />
      </div>
      <div>
        <label>CATEGORIA</label>
        <Select onChange={(v) => setarCategoria(v.target.value)}>
          <option></option>
          {categoria.map((chave, i) => (
            <option key={i} value={chave.titulo}>
              {categoria[i].titulo}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label>TITULO</label>
        <Input type="text" onChange={(e) => setarTitulo(e.target.value)} />
      </div>
      <div>
        <label>VALOR</label>
        <Input type="number" onChange={(e) => setarValor(e.target.value)} />
      </div>

      <Send
        onClick={() => {
          send({
            data: dataSelecionada,
            categoria: categoriaSelecionada,
            titulo,
            valor,
          });
        }}
      >
        Adicionar
      </Send>
    </ContainerAlteracaoMes>
  );
}
