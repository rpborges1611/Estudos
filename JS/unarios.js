let num1 = 1
let num2 = 2

num1++ //++ operador que faz incremento de 1 (forma pos fixada)
console.log(num1)

--num1 //-- operador que faz decremento de 1 (forma pre fixada - tem prioridade na execução)
console.log(num1)

console.log(++num1 === num2--) //priorizará o incremento de num1 antes mesmo de comparar com o decremento de num2
console.log(num1 === num2)