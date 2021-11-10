function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || representa o ou no javascript 
    const comprarTv50 = trabalho1 && trabalho2 // && representa o e no javascript
    const comprarTV32 = trabalho1 != trabalho2 // representa o ou exclusivo (so valido qdo os dois vaores forem iguais) utilizando diferença !=
    const manterSaudavel = !comprarSorvete // ! representa negação lógica (operador unário)

    return { comprarSorvete, comprarTv50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))