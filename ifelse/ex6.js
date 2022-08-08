/* As Organizações Tabajara resolveram dar um aumento de salário
aos seus colaboradores e lhe contrataram para desenvolver um script
que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste
segundo o seguinte critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. */

let salario = 1212;
let x;

console.log(`O salário antes do reajuste era de ${salario} reais.`);

if(salario <= 280) {
    x = 0.2;
    console.log(`O percentual aplicado foi de 20%, e o valor do aumento foi de ${salario * x} reais.`);   
}else if(salario > 280 && salario <= 700) {
    x = 0.15;
    console.log(`O percentual aplicado foi de 15%, e o valor do aumento foi de ${salario * x} reais.`);
}else if(salario > 700 && salario <= 1500) {
    x = 0.10;
    console.log(`O percentual aplicado foi de 10%, e o valor do aumento foi de ${salario * x} reais.`);
}else  {
    x = 0.5
    console.log(`O percentual aplicado foi de 05%, e o valor do aumento foi de ${salario * x} reais.`);
}

console.log(`O novo salário após o aumento é de ${salario + (salario * x)} reais. `);
