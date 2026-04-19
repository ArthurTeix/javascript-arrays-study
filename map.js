// MAP serve para alterar os valores de um array, recenbendo um novo array modificado
// segue a mesma lógica do filter
// MAP sempre retorna um array com o mesmo tamanho do original

// dobre os valores
const numeros = [80, 1, 2, 3, 34, 55]
const dobro = numeros.map(valor => valor * 2) 
console.log(dobro)


const pessoas = [
    { nome: 'Arthur', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 15 },
    { nome: 'Ana', idade: 20 } 
]

// Apenas os nomes
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

// Apenas a chave idade
const idades = pessoas.map(obj => ({ idade: obj.idade }))
console.log(idades)


// Adicione id
const id = pessoas.map((obj, index) => {
    obj.id = index + 1
    return obj
})
console.log(id)
