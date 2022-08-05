/*Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles. */

let n1 = 15;
let n2 = 8;
let n3 = 19;

if(n1 > n2 && n1 > n3) {
    console.log("O maior valor é " + n1);
}else if(n2 > n1 && n2 > n3) {
    console.log("O maior valor é " + n2);
}else {
    console.log("O maior valor é " + n3);
}

if(n1 < n2 && n1 < n3) {
    console.log("O menor valor é " + n1);
}else if(n2 < n3 && n2 < n1) {
    console.log("O menor valor é " + n2);
}else {
    console.log("O menor valor é " + n3);
}