// const nome01 = 'Luiz'; 
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 55;


// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };


// function criaPessoa (nome, sobrenome, idade) {
//     return {nome,sobrenome,idade  
//     };
// }
// const pessoa1 = criaPessoa('Gustavo', 'Phillipe' , 29);
// const pessoa2 = criaPessoa('Caroline', 'Phillipe' , 9);
// const pessoa3 = criaPessoa('Camila', 'Teixeira' , 19);
// const pessoa4 = criaPessoa('Manuela', 'Teixeira' , 89);
// console.log(pessoa1.nome, pessoa2.nome);

const pessoa = {
    nome: "Gustavo",
    sobrenome:"Cintra",
    idade: 29,

    fala () {
console.log(`${this.nome} ${this.sobrenome} está falando oi .... e eu tenho ${this.idade}.`);
    }, 
    incrementaIdade () { 
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();