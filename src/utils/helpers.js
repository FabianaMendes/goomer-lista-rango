export function formatCurrency(price) {
    let numberPrice = Number(price)
    return numberPrice.toLocaleString('pt-br', {
        style: 'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2
    });
}