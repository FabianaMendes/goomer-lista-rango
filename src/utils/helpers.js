export function formatCurrency(price) {
    if(!price) {
        return "Valor sob consulta"
    } else {
        return price.toLocaleString('pt-br', {
            style: 'currency', 
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    }
}