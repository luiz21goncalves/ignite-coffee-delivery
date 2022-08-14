export function formatMonetary(price: number) {
  const decimal = price / 100

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(decimal)
}
