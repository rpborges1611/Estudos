//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2 (pois esta dentro de uma função)
    return saudacao
}

// const saudacao = 'Hei'// caso habilite essa linha dara erro pois saudacao ja esta atribuida com Opa neste mesmo contexto

// objetos podem ser grupos aninhados de nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123

    }

}

console.log(saudacao) //exibe a constante saudacao declarada
console.log(exec()) //exibe a constante saudacao do contexto da função exec()
console.log(cliente) //exibe os resultados aninhados dentro da constante cliente