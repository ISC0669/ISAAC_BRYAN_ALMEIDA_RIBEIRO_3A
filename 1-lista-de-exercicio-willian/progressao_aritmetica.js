let inicio = Number(prompt("Digite o número inicial:"));
let razao = Number(prompt("Digite a razão:"));
let limite = Number(prompt("Digite o limite:"));

if (limite <= inicio) {
    console.log("O limite deve ser maior que o número inicial.");
} else {
    for (let i = inicio; i <= limite; i += razao) {
        console.log(i);
    }
}