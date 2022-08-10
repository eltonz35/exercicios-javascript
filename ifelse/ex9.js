/*Faça um script que leia um número e exiba o dia correspondente da semana.
 (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido. */

let numero = 3;

if(numero == 1) {
    console.log("Domingo");
}else if(numero == 2) {
    console.log("Segunda");
}else if(numero == 3) {
    console.log("terça");
}else if(numero == 4) {
    console.log("Quarta");
}else if(numero == 5) {
    console.log("Quinta");
}else if(numero == 6) {
    console.log("Sexta");
}else if(numero == 7) {
    console.log("Sabado");
}else {
    console.log("Informe um número válido");
}