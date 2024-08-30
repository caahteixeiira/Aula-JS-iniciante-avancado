function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual /100));
};
const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    tamanho:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {},
});


//p3.preco = 113;
//p3.aumento(10);


p2.aumento(10);
p1.desconto(100);
console.log(p1);
console.log(p2);
console.log(p3);