// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.
//Retorne os números maiores que 10
let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const numerosFiltrados = numeros.filter((valor, indice, array) => {
  //  console.log(valor, indice, array);
    //return valor > 10;
//});
const   maiores = numeros.filter(numeros => numeros > 10);
console.log(maiores);

// console.log(numerosFiltrados);








//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a 
const pessoas = [
    {nome: 'Carol', idade: 25},
    {nome: 'Gustavo', idade: 59},
    {nome: 'Camila', idade: 57},
    {nome: 'Manu', idade: 7},
    {nome: 'Nil', idade: 48}
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 4);
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade >= 50);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50);
console.log(nomeTerminaComA);

for (let nomes of pessoas){
    console.log(nomes.nome);
}

//const pessoasComNomeGrande = pessoas.filter(function(obj){
  //  return obj.nome.length >= 6;
//});
//console.log(pessoasComNomeGrande);