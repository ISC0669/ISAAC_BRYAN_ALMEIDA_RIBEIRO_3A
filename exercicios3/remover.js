let numeros = [10, 20, 30, 20, 40, 50, 30, 60, 70, 80];

let numerosSemRepeticao = [];

for (let i = 0; i < numeros.length; i++) {

    if (!numerosSemRepeticao.includes(numeros[i])) {
        numerosSemRepeticao.push(numeros[i]);
    }
}

console.log(numerosSemRepeticao);
