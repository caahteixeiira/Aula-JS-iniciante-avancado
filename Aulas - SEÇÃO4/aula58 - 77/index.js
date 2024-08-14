// Função construtora -> objetos 
// Função fabrica -> objetos 
// Construtora -> Pessoa (new)
const cliqueNum = document.querySelectorAll('.btn-num');
const cliqueClear = document.querySelector('.btn-clear');
const cliqueDel = document.querySelector('.btn-del');
const cliqueEqual = document.querySelector('.btn-eq');
const displayCal = document.querySelector('.display');



function displayInicial(valor){
    cliqueNum.value += valor;
    console.log(cliqueNum.value);
};

