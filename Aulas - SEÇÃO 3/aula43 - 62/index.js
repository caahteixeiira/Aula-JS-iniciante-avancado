// function recebeNumero (x){
//     if (x % 3 === 0){
//         console.log('Fizz');
//     }else if (x % 5 === 0){
//         console.log('Buzz');
//     }else if (x % 3 && x % 5 === 0){
//         console.log('FizzBuzz')
//     }else 
//     console.log('fim');

    
// }
// console.log(recebeNumero(30));


function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; 
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i)) 
}