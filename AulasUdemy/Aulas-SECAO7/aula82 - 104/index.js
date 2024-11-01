class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'ja ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'já desligado');
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1);