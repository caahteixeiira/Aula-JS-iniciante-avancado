///////// Coding Challenge #4
/* 

Steven quer construir uma calculadora de gorjetas muitos simples para sempre que for comer em um restaurante
No seu país é comundo dar gorjeta de 15% se a conta for entre 50 e 300. Se o valor for diferente, a gorjeta é 20%.

- Criar uma variavel chamada gorjeta que vai armazenar o valor da gorjeta 
- Criar uma variavel de fatura que conterá os dados de teste.

TEST DATA: Valores para conta 275, 40 e 430. 

sua tarefa é calcular a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'gorjeta' para isso. Não é permitido usar 
uma instrução if/else.
(Se for mais fácil para você, você pode começar com uma instrução if/else e depois tentar convertê-la em um operador ternário!)

2. Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final (fatura + gorjeta). 
Exemplo: 'A conta foi 275, a gorjeta foi 41,25 e o valor total 316,25'

*/

/*
let gorjeta = 0.15
let fatura = 375;
let valorGorjeta = gorjeta * fatura;

console.log(valorGorjeta);
if (fatura  >= 50 && fatura <= 300){
    console.log(`O valor da conta foi: ${fatura}, a gorjeta foi: ${valorGorjeta} e o valor final foi de: ${fatura + valorGorjeta}`);
}else if (fatura > 300){
    console.log(`O valor da conta foi: ${fatura}, a gorjeta foi: ${valorGorjeta} e o valor final foi de: ${fatura + valorGorjeta}`);
}

*/

const bill = 275;
const tip = bill <= 300 && bill >= 50? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
