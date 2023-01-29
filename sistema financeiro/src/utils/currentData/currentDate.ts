import { items } from '../../data/items';
import { Item } from '../../types/Items';

export function dateCurrent() {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth() + 1}`;
}

export function filtrarListaPeloMes(lista: Item[], data: string): Item[] {
  const listaPeloMes: Item[] = [];
  const [ano, mes] = data.split('/');

  for (const i in lista) {
    if (
      lista[i].data.getFullYear() === Number(ano) &&
      lista[i].data.getMonth() + 1 === Number(mes)
    ) {
      listaPeloMes.push(lista[i]);
    }
  }

  return listaPeloMes;
}
