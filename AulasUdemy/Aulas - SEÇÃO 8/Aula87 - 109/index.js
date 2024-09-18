function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
          if(typeof msg !== 'string') {
        reject('Cair no erro');
        return;
        }  
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    }); 
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    }else {
        return esperaAi('Baixei a página', 3)
    }
}



//Promise.all (resolve todas) Promise.race (entrega a primeira que resolver e entega o valor, sae nao o erro (catch)
//Promise.resolve () Promise.reject
const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000),
    'Outro valor' // Promessa ja resolvida e ja entrega
 ];

 Promise.all(promises) //Leitura: resolva todas essas promises e me retorne um then com todos esses valores
 .then(function(valor) {
     console.log(valor);
 })
 .catch(function (erro) {
    console.log(erro);
 });


 baixaPagina()
 .then(dadosPagina => { 
    console.log(dadosPagina);
 })
 .catch(e => console.log('ERRO',e));