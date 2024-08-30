const nomes = ['Carol', 'Gustavo', 'Camila', 'Manu', 'Nil'];

// nomes.splice(0, 0, ); 1º parametro (qual indice que quero começar), 2º parametro (quantos elementos eu quero remover do array),3º parametro(o que eu quero add)-(índice, delete, elem1, elem2)
// pop 
const removidos = nomes.splice(-1, 1);

//shift 
const removidos1 = nomes.splice(0, 1);

//push
//nomes.splice(5 , 0, "Luiz", "Augusto"); 

console.log(nomes, removidos);
console.log(nomes, removidos1);
console.log(nomes);
console.log(removidos1.length);