const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'outro'},
    {tag: 'section', texto: 'mais um texto'},
    {tag: 'footer', texto:'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    //console.log(elementos[i].tag);
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    // tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);