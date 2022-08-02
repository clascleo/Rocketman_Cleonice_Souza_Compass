//Faixa de preço
//Criar um array de objetos de faixa de preço para que ela possa ser usaddo em um site igual ao mercado livre.

function criaFaixaPreco(tooltip, minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco ("a",1,100),
    criaFaixaPreco ("b",100,1000),
    criaFaixaPreco ("c",1000,10000),
]
console.log(faixas2);