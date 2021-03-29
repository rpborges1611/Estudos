// hoisting e o processo de içamento da variavel pata o topo do codigo (internamente) caracteristico do var
// não tem muita utilidade pratica, é mais titulo de curiosidaeda linguagem.


console.log('a = ', a) //a variavel e exibida como undefined pois com o hoisting ele interpreta que ela foi criada mas sem valor
var a = 2
console.log('a = ', a) //como a variavel agora foi atribuida, sera exibido o valor 2

console.log('b = ', b) // com let ocorrerá erro pois como b não foi elevado ao topo da interpretaçao ele indicara que b não foi inicializado
let b = 2
console.log('b = ', b)