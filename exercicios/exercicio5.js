/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
adequado.

Códogo de condição de pagamento:

    - À vista no débito recebe 10 % de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes preço normal da etiqueta sem juros;
    - Acima de duas vezes, preço normal da etiqueta acrescido de 10% de juros;
*/
const valorProduto = 150;
const formaPagamento = "cartão";
const parcelado = 3;

if (formaPagamento === "debito" )
console.log(valorProduto - (valorProduto * 0.1));

else if (formaPagamento === "dinheiro" || formaPagamento === "pix" )
console.log(valorProduto - (valorProduto * 0.15));

else if (formaPagamento === "cartão" && parcelado === 2 )
console.log(valorProduto);

else 
console.log(valorProduto + (valorProduto * 0.1));