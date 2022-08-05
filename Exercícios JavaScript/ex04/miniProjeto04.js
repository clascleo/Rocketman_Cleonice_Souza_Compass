//velocidede maxima de até 70km
//a cada 5 km acima do limite ganha 1 ponto na carteira
// Math.Floor() para arredondar valores
//caso pontos seja maior que 12- " Carteira Suspensa"

verificarVelocidade(180);

function verificarVelocidade(velocidade){
    if ( velocidade <= 70)
    console.log("Você está dentro do recomendado");
    else {
        const pontos = Math.floor(((velocidade - 70) / 5));
        if( pontos >= 12)
        console.log("Carteira Suspensa");
        else
        console.log("Pontos",pontos);
    }
}

