/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - Arrays, Object, function
*/
let nome = 'Gustavo';
nome = 'Carol'; 
console.log(nome);

let a = 'A';
let b = a; //CÓPIA
console.log(a, b);

a = 'Outra coisa'; 
console.log(a, b);

let aa = [1, 2, 3];
let bb = aa; 
console.log(aa, bb);

aa.push(4);
console.log(aa, bb);

bb.pop();
console.log(aa, bb);


const teste = {
    nome: 'Gustavo',
    sobrenome: "Cintra"
}; 

const teste2 = {...teste};
teste.nome = 'Caroline';

console.log(teste2);
console.log(teste);