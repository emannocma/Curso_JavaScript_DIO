/*Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
 sua média e a sua classificação conforme tabela abaixo:

  Media = (nota1 + nota2 + nota3)/3;

 Classificação
 
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média maior ou igual a 7, passou de semestre;
*/
const nota1 = 5;
const nota2 = 2;
const nota3 = 7;
const media = (nota1 + nota2 + nota3)/3;

if(media >= 7)
   console.log("Parabéns você foi aprovado!");
else if (media === 5 && media <7)
     console.log("Você vai para recuperação");
else   
console.log("Infelizmente você foi reprovado");