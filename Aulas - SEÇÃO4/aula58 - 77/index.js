// Função construtora -> objetos 
// Função fabrica -> objetos 
// Construtora -> Pessoa (new)
const cliqueNum = document.querySelectorAll('.btn-num');
const cliqueClear = document.querySelector('.btn-clear');
const cliqueDel = document.querySelector('.btn-del');
const cliqueEqual = document.querySelector('.btn-eq');
const displayCal = document.querySelector('.display');

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('btn-num')){
        btnNum(el.innerText);
        console.log('teste')
    }
     
});

function btnNum(valor){
    displayCal.valor += valor;
};


