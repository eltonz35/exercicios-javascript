/*Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro
ele tem e em seguida diga quantos litros de combustível ele
pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.

Seu script será usado no computador de bordo do carro. */

let quiLitro = 20;
let valorLitro = 5;
let dinheiro = 43;
let qntCombustivel = dinheiro / valorLitro;


console.log(`O usuario tem ${dinheiro} reais em dinheiro`);
console.log(`Pode comprar ${qntCombustivel}l de combustível`);
console.log(`O carro consegue andar ${qntCombustivel*20}Km com  ${qntCombustivel}l de combustível`);