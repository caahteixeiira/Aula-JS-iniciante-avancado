//Valor por referência
const nomes = ['Carol', 'Gustavo', 'Camila', 'Manu', 'Nil', 'Rosane', 'Celsin'];
//String, Objetos, Funções, Numeros 
const novo = nomes.slice(1, -3); 
console.log(novo);
nomes[2] = 'João'; // Altera o valor do índice 
delete nomes[2]; // remove o índice
console.log(nomes);

const nomes1 = 'Caroline, Teixeira, Barcelos'; 
const nomes11 = nomes1.split(',');
console.log(nomes11);
