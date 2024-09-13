///////////// Coding challenge 

/* 
existem duas equipes de ginástica, Dophins e Koalas. 
Eles competem entre si 3 vezes. O vencedor com a pontuação média mais alta ganha o troféu a

1. Calcule a pontuação média de cada equipe, usando os dados de teste abaixo 
2. Compare a pontuação média da equipe para determinar o vencedor da competição e 
imprima-a no console. Não se esqueça que pode haver empate, então teste também (empate significa que eles têm a mesma pontuação média).

3. bônus I: Inclui a exigência de pontuação mínima de 100, com esta regra, uma equipe só vence se tiver uma pontuação maior que a outra equipe, e ao 
mesmo tempo uma pontuação de pelo menos 100 pontos. DICA: Use um operador lógico para testar a pontuação mínima, bem como vários blocos else-if 

BÔNUS II: A pontuação mínima também se aplica ao empate! Portanto o empate só acontece quando ambas as 
equipes tiverem o mesmo scrote e ambas tiverem pontuação maior ou igual a 100 pontos. Caso contrário, nenhum time ganha o troféu 

DADOS DE TESTE: Dolphis pontua 96, 108 e 89. Coalas pontua 88, 91 e 110
BÔNUS DE DADOS DE TESTE 1: Golfinhos pontuam 97, 112 e 101. Coalas pontuam 109, 95 e 123 
BÔNUS DE DADOS DE TESTE 2: Dolphis pontua 97, 112 e 101. Coalas pontua 109, 95 e 106   
*/
/*

const dophisNota1 = 96;
const dophisNota2 = 108;
const dophisNota3 = 89;

const koalasNotas1 = 88;
const koalasNotas2 = 91;
const koalasNotas3 = 110;

const mediaDophis = (dophisNota1 + dophisNota2 + dophisNota3) / 3;
const mediaKoalas = (koalasNotas1 + koalasNotas2 + koalasNotas3) / 3;

console.log(`A media das notas da Dophis é: ${mediaDophis.toFixed(2)}`);''
console.log(`A media das notas do Koalas é: ${mediaKoalas .toFixed(2)}`);''

//Compare a pontuação média da equipe para determinar o vencedor da competição e 
//imprima-a no console. Não se esqueça que pode haver empate, então teste também (empate significa que eles têm a mesma pontuação média).
//Comparando a pontuação media para determinar o vencedor e caso haja empate 

if (mediaDophis > mediaKoalas) {
    console.log(`A equipe Dophis é ganhadora`);
}else if (mediaDophis === mediaKoalas){  
    console.log(`Empate para as duas equipes`);
}else {
    console.log(`A equipe Koalas é ganhadora`);
}
*/


/*
const dophisNota1 = 67;
const dophisNota2 = 112;
const dophisNota3 = 101;

const koalasNotas1 = 80;
const koalasNotas2 = 95;
const koalasNotas3 = 123;

const mediaDophis = (dophisNota1 + dophisNota2 + dophisNota3) / 3;
const mediaKoalas = (koalasNotas1 + koalasNotas2 + koalasNotas3) / 3;

console.log(`A media das notas da Dophis é: ${mediaDophis.toFixed(2)}`);
console.log(`A media das notas do Koalas é: ${mediaKoalas .toFixed(2)}`);

if(mediaDophis < 100 && mediaKoalas < 100){
    console.log(`As duas equipes tiraram menos de 100`);
}else if(mediaDophis > mediaKoalas){
    console.log(`O Dophis é o ganhador`);
}else if (mediaKoalas > mediaDophis){
    console.log(`O Koalas são os ganahdores`);
}else {
    console.log(`nao é pra passar por aqui`);
}
*/ 



/*
/////Corrigido 
const scoreDolphis = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphis, scoreKoalas);

if (scoreDolphis > scoreKoalas) {
    console.log('Dolphins win the trophy 🏆')
}else if (scoreKoalas > scoreDolphis){
    console.log('Koalas win the trophy ')
}else if (scoreDolphis === scoreKoalas) {
    console.log('Both win the trophy!');
}*/
   

//Bonus 1 
const scoreDolphis = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphis, scoreKoalas);

if (scoreDolphis > scoreKoalas && scoreDolphis >= 100) {
    console.log('Dolphins win the trophy 🏆')
}else if (scoreKoalas > scoreDolphis){
    console.log('Koalas win the trophy 🏆')
}else if (scoreDolphis === scoreKoalas && scoreDolphis >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
}else {
    console.log('No one wins the trophy 😪');
}