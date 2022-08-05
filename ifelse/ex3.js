/* Faça um script que leia três números inteiros e mostre o maior deles */

let n1 = 6;
let n2 = 15;
let n3 = 3;

if(n1 > n2 && n1> n3) {
    console.log("O maior valor é " + n1);
}else if(n2 > n1 && n2 > n3) {
    console.log("O maior valor é " + n2);
}else {
    console.log("O maior valor é " + n3);
}