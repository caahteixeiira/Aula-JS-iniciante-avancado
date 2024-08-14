//Factory function (Função fábrica)
// Constructor function ( Função construtora)
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }, 

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Carol', 'Gustavo', 1.8, 70);
const p2 = criaPessoa('Camila', 'Manuela', 1.6, 60);
const p3 = criaPessoa('Fulano', 'Beutrano', 1.70, 75);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);