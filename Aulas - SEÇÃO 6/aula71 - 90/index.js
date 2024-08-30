// defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this,'estoque', {
        enumerable: false, // mostra a chave  - desativada no console
        value: estoque, // valor
        writable: false, // pode alterar o valor
        configurable: true // nem reeconfigurar e nem apagar aquela chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false

        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}
