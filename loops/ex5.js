/*Desenvolva um gerador de tabuada, capaz de gerar
a tabuada de qualquer número inteiro entre 1 a 10.
O usuário deve informar de qual numero ele deseja
ver a tabuada. A saída deve ser conforme o exemplo abaixo: */

let num1;
let num2 = 6;

for (num1 = 1; num1 <= 10; num1++) {
    if(num2) {
        console.log(`tabuada do ${num2} x ${num1} =  ${num1 * num2}`);
    }
}