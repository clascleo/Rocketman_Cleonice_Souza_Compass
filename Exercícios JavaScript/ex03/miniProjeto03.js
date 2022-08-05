//divisivel por 3 = Fizz
//divisivel por 5 = Buzz
//divisivel por 3 e 5 = FizzBuzz
//não divisivel por 3 ou 5 = entrada
//não é um numero = "não é um numero"

const resultado = fizzbuzz("a");
console.log(resultado);

function fizzbuzz(entrada){
    if ( typeof entrada !== "number")
    return "não é um número";
    if (( entrada % 3 === 0) && (entrada %5 === 0))
    return "FizzBuzz";
    if ( entrada % 3 === 0)
    return "Fizz";
    if ( entrada % 5 === 0)
    return "Buzz";
    
    return entrada;

}

