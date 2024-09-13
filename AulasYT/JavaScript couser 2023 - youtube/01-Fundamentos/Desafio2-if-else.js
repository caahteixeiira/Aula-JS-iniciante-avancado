/*
Use o IMC como exemplo do desafio 2 e e o código que você já escreveu e melhore-o

1. Imprima uma saída no console, dizendo quem tem o IMC mais alto. A menssagem de saída é 'IMC de Mark é maior que o de John's!' 
or 'Johns IMC é mais alto que Mark's!'. 

2. Use uma sequência de modelo para incluir os valores rais de IMC nas saídas. Ex: "Mark's IMC (24,85) é maior que John's (23,9)!";

*/

const pesoMark2 = 95;
const alturaMark2 = 1.88;

const pesoJohn2 = 85;
const alturaJohn2 = 1.76;

const IMCMark2 = pesoMark2 / (alturaMark2 * alturaMark2);
const IMCJohn2 = pesoJohn2 / (alturaJohn2 ** 2); 

if(IMCMark2 < IMCJohn2) {
    console.log(`IMC de Mark é maior que o de John's!`);
    console.log(`O IMC de Mark ${IMCMark2.toFixed(2)} é maior que John's ${IMCJohn2.toFixed(2)}!`)
} else {
    console.log(`Johns IMC é mais alto que Mark's!`);
    console.log(`O IMC de John's ${IMCJohn2.toFixed(2)} é maior que Mark ${IMCMark2.toFixed(2)}!`)
}

console.log(IMCMark2.toFixed(2), IMCJohn2.toFixed(2));
console.log()