export const nome = "Carol";
export const sobrenome = "Teixeira";
export const idade = 25;

export default function soma(x, y) {
    return x + y;
}


export class Pessoa{
   constructor (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    }
}