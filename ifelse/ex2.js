/*Faça um script que pede duas notas de um aluno.
 Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez. */

let nota1 = 7;
let nota2 = 5;
let media = (nota1 + nota2) / 2;

if(media >= 7 && media < 10) {
    console.log("Aprovado!");
}else if(media == 10) {
    console.log("Aprovado com Distinção!");
}else {
    console.log("Reprovado!");
}
