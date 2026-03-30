const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[6])

valores[6] = 10
console.log(valores)
console.log(valores.length)

valores.pop({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

delete valores[0]
console.log(valores)
console.log(typeof valores)

