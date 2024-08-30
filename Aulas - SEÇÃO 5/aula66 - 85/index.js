// Dobre os números 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//Para cada elemento; 
//Retorne apenas uma sting com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome:'Carol', idade: 25},
    {nome:'Gustavo', idade: 29},
    {nome:'Camila', idade: 26},
    {nome:'Nil', idade: 47}
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
}); 

// console.log(pessoas); 
console.log(comIds);