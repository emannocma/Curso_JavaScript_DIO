/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
  1- Preço do etanol;
  2- Preço da gasolina;
  3- O tipo de combustível que esta no seu carro;
  4- O gasto médio de combustível do carro por KM;
  4- Distância em KM da viagem;

Imprima no console o valor gasto nesta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const autonomia = 10;
const distanciaPercorrida = 100;
const tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol') 
   
    console.log("O valor gasto foi de R$ " +(distanciaPercorrida/autonomia)*precoEtanol);
else
    console.log("O valor gasto foi de R$ " +(distanciaPercorrida/autonomia)*precoGasolina);
