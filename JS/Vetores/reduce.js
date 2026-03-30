// Somar todos os numeros pares de um array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = numeros.reduce(function(acumulador, valor, indice){
    if (valor % 2 === 0){
        acumulador += valor
        console.log(acumulador)
    }
    return acumulador
}, 0)

console.log(total)