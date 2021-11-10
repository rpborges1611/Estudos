console.log('01)', '1' == 1) //verifica se o valor e igual ao outro (somente)
console.log('02)', '1' === 1) // verifica se o valor e extritamente igual ao outro (compara o valor e o tipo do dado. se string, number, etc)
console.log('03)', '3' != 3) // verifica se o valor é diferente do outro (somente)
console.log('04', '3' !== 3) // verifica se o valor e extritamente diferente do outro (compara o valor e o tipo do dado. se string, number, etc)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 <= 2)

const d1 = new Date(0) //Date(0) pegar a data referencia inicial da liguangem 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null) //true pois tem valores iguais
console.log('13)', undefined === null) // false pois tem valores iguais mas tipos diferentes