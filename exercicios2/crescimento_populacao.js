let nigeria = 195.9;
let china = 1393;
let anos = 0;

while (nigeria <= china) {
    console.log(`Ano ${anos}:`);
    console.log(`Nigéria: ${nigeria.toFixed(2)} milhões`);
    console.log(`China: ${china.toFixed(2)} milhões`);

    nigeria = nigeria * 1.038;
    china = china * 1.0037;

    anos++;
}

console.log(`Ano ${anos}:`);
console.log(`Nigéria: ${nigeria.toFixed(2)} milhões`);
console.log(`China: ${china.toFixed(2)} milhões`);
console.log(`Foram necessários ${anos} anos para a Nigéria ultrapassar a China.`);
