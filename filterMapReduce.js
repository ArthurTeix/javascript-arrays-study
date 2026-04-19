const numeros = [11, 73, 22, 34, 55, 80, 1, 2, 3, 92, 15, 20]

// Filtre apenas os pares
// Dobre os valores 
// Faça a soma de todos os valores


/*const pares = numeros.filter(num => num % 2 === 0)
const dobro = pares.map(dob => dob * 2)
const total = dobro.reduce((tot, valor) =>{
    tot += valor
    return tot
}, 0)

console.log(`Valores iniciais: ${numeros}`)
console.log(`Apenas os pares: ${pares}`)
console.log(`Valores dobrados: ${dobro}`)
console.log(`Soma total: ${total}`) */

const total = numeros
    .filter(num => num % 2 === 0)
    .map(dob => dob * 2)
    .reduce((tot, valor) =>{
        tot += valor
        return tot
    }, 0) 
console.log(`Soma total: ${total}`)