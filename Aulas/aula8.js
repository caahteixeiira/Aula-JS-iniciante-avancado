/*

*/
const nome = 'Gustavo Neném';
const sobrenome = 'Perfeito';
const idade = 29;
const peso = 91;
const alturaEmM = 1.71; 
let imc; // peso / (altura*altura) 
let anoNascimento; 

imc = peso / (alturaEmM *alturaEmM);
anoNascimento = 2024 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);