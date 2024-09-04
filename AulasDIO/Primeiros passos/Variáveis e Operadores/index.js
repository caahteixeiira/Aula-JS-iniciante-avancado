const precoCombustivel  = 5.79;
const gastoMedioPorLitro = 10;
const distancia = 100; 

const resultado = distancia * precoCombustivel / gastoMedioPorLitro
console.log(`O preço da viagem é ${resultado}`);

const precoDoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel; 
console.log(valorGasto.toFixed(2));