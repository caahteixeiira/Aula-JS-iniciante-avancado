// const tresHoras = 60 * 60 * 3 * 1000 // (60 segundos x 60 segundos = 1 hora e * 3 tres horas * mil segundos para dar tres horas)
// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString()); // ano, mes, dia, hora, Minuto, segundo e milessimo
const exempData = new Date('2019-04-20 20:22:59'); // Pode colocar um T


console.log('Dia', exempData.getDate());
console.log('Mes', exempData.getMonth());
console.log('Ano', exempData.getFullYear());
console.log('Horas', exempData.getHours());
console.log('Min', exempData.getMinutes());
console.log('Seg', exempData.getSeconds());
console.log('ms', exempData.getMilliseconds());
console.log('Dia semana', exempData.getDay());
console.log(exempData.toDateString());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours()); 
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date(); 
const dataBrasil = formataData(data);
console.log(dataBrasil);

