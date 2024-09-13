/* Mark e John estão tentando comparar seus índices de massa corporal e o IMC
é calculado usando esta fórmula: 
IMC = massa / (altura * altura)

Massa in KG e altura em metros 

1. Armazenar a altura e a massa dos dois em variáveis
2. Calcule o IMC de ambos usando a fórmula 
3. Criar uma variavel booleana 'markHigherIMC' que conterá a informação se Mark 
tem um IMC maior que John. 


TEST DATA 1: Marks peso 78 kg e 1.69 m  
John peso 92 kg e 1.95 altura 

TEST DATA 2:  Marks peso 95 kg e 1.88 m
John peso 85 kg e 1.76 m de altura 

*/ 


const pesoMark = 78;
const alturaMark = 1.69

const pesoJohn = 92;
const alturaJohn = 1.95;

let IMCMark = pesoMark / (alturaMark * alturaMark);
let IMCJohn = pesoJohn / (alturaJohn ** 2);

let markHigherIMC = (IMCMark > IMCJohn);


console.log(IMCMark.toFixed(2))
console.log(IMCJohn.toFixed(2))
console.log(markHigherIMC);

/////////////////////////////////////////////////////////////////////////
console.log();

const pesoMark2 = 95;
const alturaMark2 = 1.88;

const pesoJohn2 = 85;
const alturaJohn2 = 1.76;

const IMCMark2 = pesoMark2 / (alturaMark2 * alturaMark2);
const IMCJohn2 = pesoJohn2 / (alturaJohn2 * alturaJohn2);
let markHigherIMC2 = (IMCMark2 > IMCJohn2);

console.log(IMCMark2.toFixed(2), IMCJohn2.toFixed(2), markHigherIMC2);
