//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima 
//cada número par encontrado.

let numero = [1, 2, 3, 5, 6, 7, 8, 9, 10];

for (let par = 1; par <= numero.length; par++) {

    console.log(numero % 2 === 0);
    
}