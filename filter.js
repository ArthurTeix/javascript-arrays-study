const numeros = [80, 1, 2, 3, 34, 55]
// Retorne os números maiores que 10

/* const callbackFilter = (valor, index, array) => { // esses parâmetros são padronizados, não precisa colocar todos, pode colocar apenas o valor
    return valor > 10 // retorna True ou False
}
const maiores = numeros.filter(callbackFilter) */

//                 FORMA SIMPLIFICADA
// const maiores = numeros.filter(valor => valor > 10)


const maiores = numeros.filter((valor, index, array) => {
    console.log(valor, index, array)
    return valor > 10
})

console.log(maiores)


const pessoas = [
    { nome: 'Arthur', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 15 },
    { nome: 'Ana', idade: 20 } 
]

// Retorne os nomes com 5 letras ou mais
const maisDeCinco = pessoas.filter(obj => obj.nome.length >= 5)
console.log(maisDeCinco)

// Retorne pessoas com menos de 22 anos
const idadeAlta = pessoas.filter(obj => obj.idade < 22)
console.log(idadeAlta)

// Retorne pessoas com última letra A no nome
// const fimA = pessoas.filter(obj => obj.nome[obj.nome.length - 1] === 'a') // funcional
const fimA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a')) // função apropriada para checar o fim (endsWith())
console.log(fimA)