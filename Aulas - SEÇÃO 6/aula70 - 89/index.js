const pessoa1 = new Object();
pessoa1.nome = 'Carol';
pessoa1.sobrenome = 'Teixeira';
pessoa1.idade = 25; 
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}; 

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

//Toda função dentro de objeto é método


//Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// p1 = aponto para um (endereço memoria) e o endereço aponta para um -> valor
// p1.endereçomemoria = {nome :' Outra coisa'}
// p1 = (novoendereço) - NAO DA PARA SER UMA CONST 
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);