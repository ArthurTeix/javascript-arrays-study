const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = a1.concat(a2) // a3 é união de a1 + concat(a2)
console.log(a3)

// posso concatenar com diferentes elementos
const a4 = a1.concat(a2, [7, 8, 9], 'Arthur')
console.log(a4)

// também posso utilizar rest operator
// ... rest -> ... spread

const a5 = [...a1, 'Teixeira', ...a2, 'Lima', ...[7, 8, 9]]
console.log(a5)
