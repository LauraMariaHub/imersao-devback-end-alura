alert("Boas vindas ao jogo do número secreto");

let  numSecreto = 2;

console.log(numSecreto)
let chute;

while (chute != numSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");

    if (chute == numSecreto) {
        alert(`Você descobriu o número secreto ${numSecreto}`);
    }
    else {
        if (chute > numSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    }

}
