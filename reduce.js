// REDUCE é usado para reduzir o Array em um único elemento
// segue mesma lógica de uso do filter e map 
// a única diferença é que o reduce tem um acumulador (posso escolher o valor inicial)

const numeros = [80, 1, 2, 3, 34, 55]
// Retorne a soma de todos os números
const soma = numeros.reduce(function (acumulador, valor, index, array) {
    acumulador += valor
    return acumulador
}, 0) // o 0 é o valor inicial do acumulador, se não colocar, o valor inicial será o primeiro elemento do array (80) e a iteração começará a partir do segundo elemento (1)
console.log(soma)

// meu acumulador pode ser um array, objeto, string, etc... não precisa ser necessariamente um número
// nesse caso vou usar o reduce para retornar um array apenas com os números pares, mas o melhor seria usar o filter para isso
const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []) // o valor inicial do acumulador é um array vazio
console.log(pares)

// Retornar o dobro de cada número
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(dobro)

