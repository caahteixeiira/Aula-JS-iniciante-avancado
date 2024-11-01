// // Declaração de função (Function hoisting)
 falaOi();


 function falaOi(){
     console.log('Oie');
 }

// //First-class objects (Objetos de primeira classe)
// // Function expression
 const souUmDado = function() {
     console.log('Sou um dado.');
 };
 souUmDado();

// //Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
 };
funcaoArrow();

// Dentro de um objeto
const obj = {
    // falar() {
    //     console.log('Estou falando...');
    // },

    // gritar() {
    //     console.log('AAAAAAAAAAAAAAAAAAAAAAAA')
    // }
    nome: 'Carol',
    idade: 25,
    Cidade: ['Belo Horizonte', 'Juiz de fora']
};

console.log(obj.Cidade)

// obj.falar();

// obj.gritar();

function validarCpf() {


function validarPrimeirodigito() {
    console.log('a')
}


function validarSegundodigito() {
    console.log('a')
}



function validador() {
    validarPrimeirodigito()
    validarSegundodigito()
}

validador()
}

validarCpf()
