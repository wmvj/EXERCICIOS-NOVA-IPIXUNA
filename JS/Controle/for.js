const frutas = ['maçã', 'laranja', 'uva']
const pessoa = {
    nome: 'Maria',
    idade: 25,
    peso: 60
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}   

for (let index of frutas) {
    console.log(index)
}