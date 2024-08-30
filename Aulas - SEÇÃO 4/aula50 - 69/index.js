// argumentos que sustenta todos os argumentos enviados
function funcao(a, b = 2, c =4){
    console.log(a + b +c);
}
funcao(2, null,20);

function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao2({nome: 'Carol', sobrenome:'Teixeira', idade: 20});


function nome([valor0, valor1, valor2]){
    console.log(valor0, valor1, valor2);
}
nome(['carol', 'teixeira', 20]);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 2, 20, 30, 40, 50);