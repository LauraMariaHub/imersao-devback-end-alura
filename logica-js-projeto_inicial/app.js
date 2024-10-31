alert("Boas vindas ao jogo do número secreto");

let  numSecreto = parseInt(Math.random() * 100 + 1);

console.log(numSecreto);
let chute;
let contador = 1;

while(chute != numSecreto){
    chute = prompt("Escolha um número entre 1 e 100");

if (chute == numSecreto ){
    break;
} 
else {

    if(chute > numSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }

    contador++;
}

}

let palavraTentativa = contador > 1 ?'tentivas' : 'tentativa';
alert(`Você descobriu o número secreto ${numSecreto} com ${contador} ${palavraTentativa}`);



