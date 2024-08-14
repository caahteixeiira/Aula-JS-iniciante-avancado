const form = document.querySelector("#form");

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#input-teste-1');
    const inputAltura = e.target.querySelector('#input-teste-2');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);

    console.log(imc, nivelImc);
});
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];

    // if(imc >= 39.9){
    //     return nivel[5];
    // }
    // if(imc >= 34.9){
    //     return nivel[4];
    // }
    // if(imc >= 29.9){
    //     return nivel[3]
    // }
    // if(imc >= 24.9){
    //     return nivel[2]
    // }
    // if(imc >= 18.5){
    //     return nivel[1]
    // }
    // if(imc < 18.5){
    //     return nivel[0];
    // }
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado-final');
    resultado.innerHTML = " ";

    const p = criaP();
    if (isValid) {
        p.classList.add('resultado-final');
    }else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}




















// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
// });
    

// function calcularIMC(){
//     const peso = document.getElementById('input-teste-1');
//     const altura = document.getElementById('input-teste-2');
//     const resultado = document.getElementsByClassName('resultado-final');

//     const calculo = altura + peso;
//     console.log(`Teste ${calculo}`);

//     if (calculo < 18,5){
//         console.log="Abaixo do peso";
//     }else if (calculo >= 18,5 && calculo <= 24,9) {
//         console.log('Peso normal');
//     }else if (calculo >= 25 && calculo <= 29,9){
//         console.log('Sobrepeso');
//     }else if (calculo >= 30 && calculo <= 34,9){
//         console.log('Obesidade grau 1');
//     }else if (calculo >= 35 && calculo <= 39,9){
//         console.log('Obesidade grau 2')
//     }else {
//         console.log('Obesidade grau 3')
//     }
    
//         resultado.innerHTML += `Seu IMC é ${calculo}`;
// }    
//     calcularIMC();