export function formatCurrency(price) {
    return price.toLocaleString('pt-br', {
        style: 'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2
    });
}