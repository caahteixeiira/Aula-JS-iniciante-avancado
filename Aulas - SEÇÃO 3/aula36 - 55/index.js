const frutas = ['Pera', 'maça', 'uva'];
const pessoa = {
    nome: 'Carol',
    sobrenome: 'Teixeira',
     idade: 30
}; 

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
} 