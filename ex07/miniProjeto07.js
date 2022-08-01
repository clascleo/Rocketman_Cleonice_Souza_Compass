//Criar uma função somar que retorna a soma de todos os multiplos de 3 e 5

somar(30);
function somar(limite){
    let multiplosde3 = 0;
    let multiplosde5 = 0;
    for (i = 0; i <= limite; i++){
        if (i % 3 === 0)
        multiplosde3 += i;
        if (i % 5 === 0)
        multiplosde5 += i;
    }
    console.log("Resultado da soma dos valores dos numeros multiplos de 3 e 5, dentro de: " + limite)
    console.log("Multiplos de 3 " + "= " + multiplosde3);
    console.log("Multiplos de 5 " + "= " + multiplosde5);
    console.log("Total" + "=", multiplosde3 + multiplosde5);
}

