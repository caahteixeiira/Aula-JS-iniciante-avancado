// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor)  {
    if(valor % 2 === 0){ //impares inverte !== 
    acumulador += valor;
    }
       return acumulador;
}, 0); //o primeiro valor tem que ser 0 para somar os pares
console.log(total);



//Retorne a pessoa mais velha 
const pessoas = [
{nome: 'Carol', idade: 62},
{nome: 'Gustavo', idade: 25},
{nome: 'Camila', idade: 55},
{nome: 'Rosane', idade: 20},
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return  valor;
});
console.log(maisVelha);
