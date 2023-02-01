export function formatarData(data: Date): string {
  return `${zeroNaData(data.getDate())}/${data.getFullYear()}`;
}

export function zeroNaData(data: number): string {
  if (data < 10) return `0${data}`;
  return `${data}`;
}
