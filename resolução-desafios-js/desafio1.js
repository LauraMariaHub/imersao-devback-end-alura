alert ("Boas vindas ao nosso site!")

let nome = "Lua"

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

let mensagemDeErro =  "Erro! Preencha todos os campos";

alert (mensagemDeErro);

let nome = prompt("Qual o seu nome?");

let idade = prompt("Qual a sua idade?");

if (idade >= 18){
    alert("Habilitado para tirar carteira de habilitação");
}