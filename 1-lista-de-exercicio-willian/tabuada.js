let numero = Number(prompt("Digite o número da tabuada:"));
let limite = Number(prompt("Digite até qual multiplicador deseja ver:"));

for (let i = 1; i <= limite; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}