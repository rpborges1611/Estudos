const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // [] indica a posição no indice do array o ()
funcs[8]() // apresenta o valor 10 pois as funcoes são executadas somente ap[os a fnalização do laço do for pois o var não tem escopo em bloco