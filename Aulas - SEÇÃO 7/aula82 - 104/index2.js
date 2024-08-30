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

class Smartphone extends DispositivoEletronico { // herdei tudo da class Dispositovo
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico { // herdei tudo da class Dispositovo
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o metodo ligar.');
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'XR');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar();