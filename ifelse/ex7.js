/*Faça um script que leia três números e mostre-os em ordem decrescente. */

let num1 = 6;
let num2 = 3;
let num3 = 9;
let aux = num1;

if(num2 > num1) {
    aux = num2;
    num2 = num1;
    num1 = aux;
}

if(num3 > num1){
    aux=num3;
    num3=num1;
    num1=aux;
   }

if(num3 > num2){
    aux=num3;
    num3=num2;
    num2=aux;
   }

console.log(num1 + "-" + num2 + "-" + num3);





