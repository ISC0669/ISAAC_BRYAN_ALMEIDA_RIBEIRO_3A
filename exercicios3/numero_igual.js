let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let array2 = [5, 15, 25, 35, 45, 55, 60, 80, 95, 105];

let numerosIguais = [];

for (let i = 0; i < array1.length; i++) {

    if (array2.includes(array1[i])) {
        numerosIguais.push(array1[i]);
    }
}

console.log("Números que aparecem nos dois arrays:");
console.log(numerosIguais);
