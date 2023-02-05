import { Item } from '../types/Items';
import { categoria } from './categoria';
const data = new Date();
export const items: Item[] = [
  {
    data: new Date(),
    categoria: categoria[0].titulo,
    titulo: 'Quentinha',
    valor: '-15,00',
  },
  {
    data: new Date(),
    categoria: categoria[1].titulo,
    titulo: 'Skol',
    valor: '-40,00',
  },
  {
    data: new Date(),
    categoria: categoria[2].titulo,
    titulo: 'Roupa Nike',
    valor: '-120,00',
  },
  {
    data: new Date(),
    categoria: categoria[3].titulo,
    titulo: 'Pagamento',
    valor: '3200,00',
  },
  {
    data: new Date(data.setMonth(data.getMonth() + 1)),
    categoria: categoria[2].titulo,
    titulo: 'Chinelo',
    valor: '-60,00',
  },
  {
    data: new Date(data.setMonth(data.getMonth())),
    categoria: categoria[3].titulo,
    titulo: 'Pagamento',
    valor: '2000,00',
  },
];
