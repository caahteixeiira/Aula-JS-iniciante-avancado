class Carro {
    constructor (marca, cor) {
        this.marca = marca;
        this.cor = cor;

    } 

     calcularGastoMedio(distancia, precoCombustivelPorKM) {
        const gastoMedio = distancia * precoCombustivelPorKM;
        console.log(`A distância é ${distancia} km e o gasto médio é R$ ${gastoMedio.toFixed(2)}`);
        return gastoMedio;
    }
}

const carro01 = new Carro ('Toyota', 'vermelho', )
carro01.calcularGastoMedio(15, 5.50);
// console.log(carro01);