//funçao sem retorno
function imprimiSoma(a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

//funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))