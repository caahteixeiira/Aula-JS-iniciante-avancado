//  for (let i = 0; i <= 5; i++) {
//     console.log(i); 
//  }
 
 for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
 }

const frutas = ['maça', 'pera', 'uva', 'mamão', 'banana'];

for(let i = 0; i < frutas.length; i++) {
    console.log(i);
    console.log(`Índice ${i}`, frutas[i]);
}
