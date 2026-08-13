let largura = Number(prompt("Digite a largura:"));
let altura = Number(prompt("Digite a altura:"));

for (let i = 0; i < altura; i++) {
    let linha = "";

    for (let j = 0; j < largura; j++) {
        linha += "* ";
    }

    console.log(linha);
}
