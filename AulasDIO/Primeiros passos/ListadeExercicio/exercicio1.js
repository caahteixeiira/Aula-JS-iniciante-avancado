const nota1 = 7;
const nota2 = 6;
const nota3 = 7; 
const media = (nota1 + nota2 + nota3) / 3;
console.log('Sua nota é:', media.toFixed(2));

if (media <= 5){
    console.log('Reprovado');
}else if (media >= 5 && media <= 7){
    console.log('Recuperação');
}else {
    console.log('Passou de semestre')
}
