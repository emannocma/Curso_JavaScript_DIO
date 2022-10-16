/*O IMC - Índice de massa corporal é um critério de Organização Mundial de Saúde para dar uma indicação sobre 
a condição de peso de uma pessoa adulta.

Formula do IMC

  IMC = peso / (altura * altura);

Elabore um algotitmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo: 
 
  IMC em adultos:  
    - Abaixo de 18.5, abaixo do peso;
    - Entre 18.5 e 25 peso normal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 obeso;
    - Acima de 40 obesidade grave;
*/
const peso = 150;
const altura = 1.82;
const IMC = peso / Math.pow(altura, 2);

if (peso<18.5)
console.log("Você esta abaixo do peso");
else if (IMC>=18.5 && IMC<25)
console.log("Você esta em forma, parabéns!");
else if (IMC>=25 && IMC<30)
console.log("Você esta acima do peso, atenção");
else if (IMC>=30 && IMC<=40)
console.log("Você esta obeso, cuidado");
else
console.log("Você esta com obesidade mórbita e corre risco de vida");

console.log(IMC.toFixed(2));

