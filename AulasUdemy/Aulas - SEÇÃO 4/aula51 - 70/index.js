// return 
// retorna um valor 
// Termina a função 

function soma(a, b){
    return a + b;
}
console.log (soma(2, 4));

function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(2);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));