// função sem retorno

function soma(a, b) {
    console.log (a+b)
}

soma(2,3)
soma(2)
soma(2,5,5,6,7)

// funcao com retorno

function soma(a, b) {
    return a+b
}

console.log(soma(2,3))

// armazenar função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

// armazenar função arrow em uma variavel

const soma2 = (a, b) => {
    return a+b
}

console.log(soma2(2,3))

const subtracao = (a, b) => a-b
console.log(subtracao(2,3))