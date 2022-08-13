/*Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50. */

let numeros;

for(numeros = 1; numeros <= 50; numeros++) {
    if(numeros % 2 != 0) {
        console.log(numeros);
    }
}
