import { nome, sobrenome as final, idade, soma, Pessoa } from './modulo1'; // Consigo importar coisas mais especificas 


console.log(nome, idade, final);
console.log(soma(5, 5));
const p1 = new Pessoa('Camila','Vidigal');
console.log(p1);


/*
import * as Meumodulo from './modulo1';
console.log(Meumodulo); // Importa tudoo do o modulo 
*/ 


/*
///////// Importar o default 
import multiplica, { nome, sobrenome, idade, soma } fom './modulo1';
console.log(multiplica(5, 40));
console.log(nome, sobrenome, idade, soma(4, 4));
*/