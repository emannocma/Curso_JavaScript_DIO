
/*Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
  1- Preço do combustível;
  2- Gasto médio de combustível do carro por KM;
  3- Distância em KM da viagem;

Imprima no console o valor gasto nesta viagem.
*/

const v_comb = 5.79;
const autonomia = 10 ;
const distancia = 100; 

console.log("O valor gasto nessa viagem foi: R$ "+ (distancia/autonomia)*v_comb.toFixed(2));
