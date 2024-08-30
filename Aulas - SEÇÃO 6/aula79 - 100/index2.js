const falar = {
    fala(){
        console.log(`${this.nome} está falando.`)
    },
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    },
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    },
}

const pessoaPrototype = {...falar, ...comer, ...beber};   // ou Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome){

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const pessoa1 = criaPessoa("Carol", "Teixeira");
const pessoa2 = criaPessoa('Manu', 'Barcelos');;
console.log(pessoa1);