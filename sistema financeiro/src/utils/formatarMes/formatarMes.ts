export function formatarMes(mesAtual: string) {
  const [ano, mes] = mesAtual.split('/');
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return `${meses[+mes - 1]}/${ano}`;
}
