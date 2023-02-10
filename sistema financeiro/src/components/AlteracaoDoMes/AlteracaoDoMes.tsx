import { useState } from 'react';
import { categoria } from '../../data/categoria';
import { Item } from '../../types/Items';

import { ContainerAlteracaoMes, Input, Select, Send } from './styles';

type Props = {
  items: Item[];
  setItems: (value: Item[]) => void;
};

export function AlteracaoDoMes({ items, setItems }: Props) {
  const [dateSelected, setDateSelected] = useState<Date | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<string | undefined>(undefined);

  function setDateSelectedFn(value: string): void {
    const data = new Date(value);
    setDateSelected(data);
  }

  function setCategorySelectedFn(categoria: string) {
    setSelectedCategory(categoria);
  }

  function setTitleSelectedFn(title: string) {
    setTitle(title);
  }

  function setValueSelectedFn(value: string) {
    setValue(value);
  }

  function send() {
    if (!dateSelected || !selectedCategory || !title || !value) {
      alert('Algum campo está vazio/valor incorreto.');
      return;
    }

    setItems([
      ...items,
      {
        data: dateSelected,
        category: selectedCategory,
        title,
        value,
      },
    ]);
  }

  return (
    <ContainerAlteracaoMes>
      <div>
        <label>DATA</label>
        <Input
          type="date"
          onChange={(e) => setDateSelectedFn(e.target.value)}
        />
      </div>
      <div>
        <label>CATEGORIA</label>
        <Select onChange={(v) => setCategorySelectedFn(v.target.value)}>
          <option value="">Selecione uma categoria</option>
          {categoria.map((chave, i) => (
            <option key={i} value={chave.titulo}>
              {categoria[i].titulo}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label>TITULO</label>
        <Input
          type="text"
          onChange={(e) => setTitleSelectedFn(e.target.value)}
        />
      </div>
      <div>
        <label>VALOR</label>
        <Input
          type="number"
          onChange={(e) => setValueSelectedFn(e.target.value)}
        />
      </div>

      <Send onClick={send}>Adicionar</Send>
    </ContainerAlteracaoMes>
  );
}
