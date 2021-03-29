const [a] = [10] //usar [ ] indicar q vou desestruturar um array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
] //evitar utilizar neste formato, pois dificulta a leitura do código
console.log(nota)