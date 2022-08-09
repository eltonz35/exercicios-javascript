/*Faça um script para o cálculo de uma folha de pagamento,
 sabendo que os descontos são do Imposto de Renda, que depende
do salário bruto (conforme tabela abaixo) e 3% para o Sindicato
e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado
(é a empresa que deposita). O Salário Líquido corresponde ao Salário
Bruto menos os descontos. O script deverá pedir ao usuário o valor
da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima
na tela as informações, dispostas conforme o exemplo abaixo.
 No exemplo o valor da hora é 5 e a quantidade de hora é 220.

Salário Bruto: (5 * 220)        : R$ 1100,00
(-) IR (5%)                     : R$   55,00
(-) INSS ( 10%)                 : R$  110,00
FGTS (11%)                      : R$  121,00
Total de descontos              : R$  165,00
Salário Liquido                 : R$  935,00  */

let valorHora = 5;
let horasTrabalhadas = 220;
let salarioBruto = valorHora * horasTrabalhadas;
let ir;
let inss = 0.10 * salarioBruto;
let fgts = 0.11 * salarioBruto;
let desconto;
let salarioLiquido = salarioBruto - ir - inss;
let totalDesconto = ir + inss;

if (salarioBruto <= 900) {
    console.log("Isento");
}else if(salarioBruto <= 1500) {
    ir = 0.05 * salarioBruto;
    totalDesconto = ir + inss;
    salarioLiquido = salarioBruto - ir - inss;
    console.log(`Salário Bruto:      R$ ${salarioBruto},00`);
    console.log(`(-) IR (5%):        R$   ${ir},00 `);
    console.log(`(-) INSS (10%):     R$  ${inss},00`);
    console.log(`FGTS (11%):         R$  ${fgts},00 `);
    console.log(`Total de descontos: R$  ${totalDesconto},00`);
    console.log(`Salário Liquido:    R$  ${salarioLiquido},00`);
}else if(salarioBruto <= 2500) {
    ir = 0.10 * salarioBruto;
    totalDesconto = ir + inss;
    salarioLiquido = salarioBruto - ir - inss;
    console.log(`Salário Bruto: R$ ${salarioBruto},00`);
    console.log(`(-) IR (5%): R$ ${ir},00 `);
    console.log(`(-) INSS (10%): R$ ${inss},00`);
    console.log(`FGTS (11%): R$ ${fgts},00 `);
    console.log(`Total de descontos: R$ ${totalDesconto},00`);
    console.log(`Salário Liquido: R$ ${salarioLiquido},00`);
}else {
    ir = 0.20 * salarioBruto;
    totalDesconto = ir + inss;
    salarioLiquido = salarioBruto - ir - inss;
    console.log(`Salário Bruto: R$ ${salarioBruto},00`);
    console.log(`(-) IR (5%): R$ ${ir},00 `);
    console.log(`(-) INSS (10%): R$ ${inss},00`);
    console.log(`FGTS (11%): R$ ${fgts},00 `);
    console.log(`Total de descontos: R$ ${totalDesconto},00`);
    console.log(`Salário Liquido: R$ ${salarioLiquido},00`);
}

