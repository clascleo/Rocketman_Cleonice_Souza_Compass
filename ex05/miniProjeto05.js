// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

exibirTipo(68);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
        console.log(i, "Par");
        else
        console.log(i, "Impar");
    }
}

