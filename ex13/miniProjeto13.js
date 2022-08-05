//Crie um objeto de postagem de blog, nele deve conter as seguintes propriedades:
//postagem
//titulo
//mensagem
//autor 
//visualizaçoes
//comentarios
//(autor, mensagem)
//estaAoVivo

let postagem = {
    titulo: "Valor do gasolina",
    mensagem: "Sobe o valor da gasolina",
    autor: "Cleonice Alves de Souza",
    visualizacoes: 9,
    comentarios: [
        {autor: "Amanda",mensagem: "Meu Deus! onde vamos parar com esses aumentos?"},
        {autor: "Tamara",mensagem: "Como estágiaria o jeito é andar de buzão mesmo!"}
    ],
    estaAoVivo: true
}

console.log(postagem);