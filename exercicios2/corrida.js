let carro1 = 10;
let carro2 = 20;
let volta = 0;

while (carro1 <= carro2) {
    volta++;

    carro1 += 3;
    carro2 += 1.5;

    console.log(`Volta ${volta}`);
    console.log(`Carro 1: ${carro1} km/h`);
    console.log(`Carro 2: ${carro2} km/h`);
}

console.log(`O carro 1 ultrapassou o carro 2 na volta ${volta}.`);
console.log(`Total de voltas: ${volta}`);
