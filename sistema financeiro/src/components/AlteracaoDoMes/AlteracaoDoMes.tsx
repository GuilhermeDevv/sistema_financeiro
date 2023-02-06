import { useState } from 'react';
import { categoria } from '../../data/categoria';
import { formatarMes } from '../../utils/formatarMes/formatarMes';

import { ContainerAlteracaoMes, Input, Select, Send } from './styles';

type Props = { fnMes: (v: string) => void };

export function AlteracaoDoMes({ fnMes }: Props) {
  const [dataSelecionada, setDataSelecionada] = useState('');
  const categoryKeys: string[] = Object.keys(categoria);
  function formatarDataBr(value: string): void {
    const data = new Date(value);
    const dataFormatada = `${data.getFullYear()}/${data.getMonth() + 1}`;
    setDataSelecionada(dataFormatada);
  }
  console.log(categoryKeys);
  return (
    <ContainerAlteracaoMes>
      <div>
        <label>DATA</label>
        <Input type="date" onChange={(e) => formatarDataBr(e.target.value)} />
      </div>
      <div>
        <label>CATEGORIA</label>
        <Select>
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
        <Input type="text" />
      </div>
      <div>
        <label>VALOR</label>
        <Input type="number" />
      </div>

      <Send>Adicionar</Send>
    </ContainerAlteracaoMes>
  );
}
