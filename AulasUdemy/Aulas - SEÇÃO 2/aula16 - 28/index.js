const alunos = ['Luiz', 'Maria', 'João']; 

const removido = alunos.pop(); 
console .log(removido);
console.log(alunos);
console.log(alunos instanceof Array); // Esse alunos é uma instancia de array, true é porque é verdadeiro


alunos.unshift('Fábio');
alunos.unshift('Luiza');

console.log(alunos);

// alunos.push('Luiza'); //Adiciona no fim
// alunos.push('Fabio'); 

// alunos[alunos.length] = 'Luiza'; // Adiciona no fim 
// alunos[alunos.length] = 'Fábio';