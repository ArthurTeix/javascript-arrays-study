// forEach funciona como um loop, mas ele é mais simples de usar e mais legível. Ele é usado para iterar sobre os elementos de um array e executar uma função para cada elemento.
// Ele não retorna um novo array, ele apenas executa a função para cada elemento do array original.
// exclusivo de arrays, não funciona em objetos

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90]

num.forEach((valor, index, array) => {
    console.log(`Valor: ${valor}, Index: ${index}, Array: ${array}`)
})

// soma dos valores do array
let total = 0
num.forEach(valor => total += valor)
console.log(`Total: ${total}`)