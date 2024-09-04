const numero = 2;
let numeroPar =  numero % 2; 

if (numeroPar === 0){
    console.log('é par')
}else {
    console.log('é impar')
}
console.log(numeroPar);


const numero1 = 2; 
const numeroPar1 = (numero1 % 2) === 0;
console.log(numeroPar1);
if(numeroPar1) {
    console.log('Executado');
}

if (!numeroPar1){
    console.log('Impar');
}