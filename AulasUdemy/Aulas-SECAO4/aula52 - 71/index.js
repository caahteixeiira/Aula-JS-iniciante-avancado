const nome = 'Carol';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Teixeira';
    falaNome();
}
usaFalaNome();