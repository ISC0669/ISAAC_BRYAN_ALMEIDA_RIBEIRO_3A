let compras = [
    ["Detergente", "Arroz"],
    ["Sabão em pó", "Feijão"],
    ["Desinfetante", "Macarrão"],
    ["Água sanitária", "Leite"],
    ["Esponja", "Pão"]
];

console.log("Itens de limpeza:");

for (let i = 0; i < compras.length; i++) {
    console.log(compras[i][0]);
}

console.log("Itens de alimentação:");

for (let i = 0; i < compras.length; i++) {
    console.log(compras[i][1]);
}
