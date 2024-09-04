class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC() {
        return this.peso / (this.altura * this.altura);
        
    }

    classificarIMC() {
        const imc = this.calculoIMC();
        if (imc < 18.5){
            return 'Abaixo do peso';
        }else if (imc >= 18.5 && imc < 25){
            return 'Peso normal';
        }else if (imc >= 25 && imc < 30){
            return 'Acima do peso';
        }else if(imc >= 30 && imc < 40){
            return 'Obeso';
        }else {
            return 'Obessidade grave';
        }
        
    }
}

const pessoa1 = new Pessoa('José', 70, 1.75);
console.log(`Meu IMC é ${pessoa1.calculoIMC().toFixed(2)} e estou ${pessoa1.classificarIMC()}`);