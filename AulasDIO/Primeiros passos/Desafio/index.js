const precoEtanol = 4.75;
const precoGasolina = 5.89;
const tipoDeCombustivelCarro = 'Etanol';
const gastoMedio = 10;
const distanciaEmKm = 150;
const litrosCosumidos = distanciaEmKm / gastoMedio;

if (tipoDeCombustivelCarro === 'Etanol') {
    const valorGasto = litrosCosumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosCosumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}