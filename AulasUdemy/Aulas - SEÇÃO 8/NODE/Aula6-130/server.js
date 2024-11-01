const express = require('express');
const app= express();

//          Criar   ler   att    apagar 
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST     GET    PUT    DELETE

// http://meusite.com/ <- GET -> Entregue a página 
// http://meusite.com/sobre  <- GET -> Entregue a página  / sobre 

app.get('/', (req, res) => {
    res.send(` 
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
    
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});