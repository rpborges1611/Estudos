//variavel global pode ser vista em qq lugar do codigo
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

//variavel atribuida em function so é visivel dentro do bloco da function

function teste() {
    var local = 123
    console.log(local)
}

teste()
    // tentando exibir conteudo da variavel local (vai dar erro)
console.log(local)