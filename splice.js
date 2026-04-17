const nomes = ['Arthur', 'Maria', 'João', 'Ana', 'Caio', 'Lucas']

// nomes.splice(index, delete, elem1, elem2)
// index: índice de início da minha operação
// delete: quant de itens a remover
// elem1/2: itens que quero add (opicionais)

nomes.splice(3, 2) // começa em 'Ana' e remove 2 itens (Ana e Caio)
console.log(nomes)

nomes.splice(1, 0, 'Miguel') // no índice 1, não remova mas troque para Miguel
console.log(nomes)

nomes.splice(2, 1, 'Ingrid') // no índice 2, remova o item e add Ingrid
console.log(nomes)

nomes.splice(3, 2, 'Kayo', 'Araujo') // no índice 3, remova 2 itens e add Kayo e Araujo (trocou)
console.log(nomes)
