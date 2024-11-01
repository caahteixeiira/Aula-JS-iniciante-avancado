fetch('pagina1.html')//url ou arquivo e ja vem uma promisse 
    .then(resposta => { // reposta do fetch api
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO'); 
    })
    .catch(e => console.log(e)); 