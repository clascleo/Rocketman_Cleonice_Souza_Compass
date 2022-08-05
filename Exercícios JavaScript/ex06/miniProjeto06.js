// Criar um método para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo string que estãonesse objeto

const filme = {
    titulo : "Velozes e furiosos",
    ano: 2020,
    diretor: "Roberto Carlos",
    personagem : "Dominic Toretto"
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
    if(typeof obj[prop] === "string")
    console.log(prop + ":", obj[prop])
}
