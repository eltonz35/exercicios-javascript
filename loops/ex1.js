/*Faça um programa que peça uma nota, entre zero e dez.
Mostre uma mensagem caso o valor seja inválido e continue
pedindo até que o usuário informe um valor válido.  */

let nota = 10;

console.log(`Valor informado ${nota}`);

while(nota > 10) {
    console.log("Valor inválido");
}