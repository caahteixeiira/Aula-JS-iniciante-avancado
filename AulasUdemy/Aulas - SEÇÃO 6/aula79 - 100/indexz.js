function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        fala(){
            console.log(`${this.nome} está falando.`)
        },
        comer(){
            console.log(`${this.nome} está falando.`);
        },
        beber(){
            console.log(`${this.nome} está bebendo.`);
        },
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const pessoa1 = criaPessoa("Carol", "Teixeira");
const pessoa2 = criaPessoa('Manu', 'Barcelos');;
console.log(pessoa1);