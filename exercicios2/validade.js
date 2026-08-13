while (true) {
    let produto = prompt("Digite o nome do produto ou 'sair' para encerrar:");

    if (produto.toLowerCase() === "sair") {
        break;
    }

    let dataVencimento = prompt("Digite a data de vencimento (AAAA-MM-DD):");

    let vencimento = new Date(dataVencimento);
    let hoje = new Date();

    if (vencimento < hoje) {
        console.log(`${produto} está vencido.`);
    } else {
        console.log(`${produto} não está vencido.`);
    }
}
