function retornarFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornarFuncao('Carol');
const funcao2 = retornarFuncao('Teixeira');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
