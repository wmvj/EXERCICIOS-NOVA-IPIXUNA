const curso = 'Web1'

console.log(curso.charAt(1))
console.log(curso.charAt(10))
console.log(curso.indexOf('1'))

console.log(curso.substring(1))
console.log(curso.substring(0,3))
console.log("Curso ".concat(curso).concat(" de JavaScript"))
console.log(curso.replace('1','e'))
console.log("Ana,Maria,Pedro".split(','))

// Template String

const nome = 'João'
const concatenacao = nome + ' tem ' + 20 + ' anos'

const template = `Olá ${nome}`
console.log(`1 + 1 = ${1+1}`)
console.log(concatenacao)
console.log(template)

const up = texto => texto.toUpperCase()
console.log(`Um teste do ${up('teste')}`)
