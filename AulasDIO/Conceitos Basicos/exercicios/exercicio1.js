function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}


function verificarIdade(idade){
    if (idade >= 17){
        console.log(escrevaMeuNome('carol') + ' é Maior');
    }else{
        console.log('Menor');
    }
}
verificarIdade(18);