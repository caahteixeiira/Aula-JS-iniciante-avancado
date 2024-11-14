const express = require ('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send(` 
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="corpo">
        <button>Enviar</button>
        </form>
        `);
    
});