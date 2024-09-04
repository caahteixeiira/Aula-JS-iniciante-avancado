const pessoa = {
    nome: 'Carol', 
    sobrenome: 'Teixeira', 
    idade: 20,
    endereco: {
        rua: 'Goias',
        numero: 320
    }
};

const nome = pessoa.nome;
const { 
    endereco: {rua , numero}, 
    endereco
} = pessoa;
console.log(rua, numero, endereco);