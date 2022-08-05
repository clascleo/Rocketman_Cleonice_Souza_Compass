// Objeto Endereço
// Criar um objeto endereço que contenha:
//rua, cidade, cep

let endereco = {
    rua:"Serafim",
    cidade: "Ceara",
    cep: 84251444
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
    console.log(chave + ":", endereco[chave]);
}

exibirEndereco(endereco);