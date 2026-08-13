let total = 0;

for (let dia = 1; dia <= 12; dia++) {
    let deposito = dia * 2;

    total += deposito;

    console.log(`Dia ${dia}: depósito de R$ ${deposito.toFixed(2)}`);
}

console.log(`Total acumulado: R$ ${total.toFixed(2)}`);
