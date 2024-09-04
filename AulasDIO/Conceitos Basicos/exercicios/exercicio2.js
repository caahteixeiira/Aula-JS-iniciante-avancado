function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}



const precoOriginal = 100; 
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log('Você recebeu ' + aplicarDesconto(precoOriginal, 10) + ' reais de desconto.');
}else if(formaDePagamento === 2){
     console.log('Você recebeu ' + aplicarDesconto(precoOriginal, 15) + ' reais de desconto');
}else if(formaDePagamento === 3){
    console.log(precoOriginal);
}else { 
    console.log('Você pagou ' + aplicarJuros(precoOriginal, 10) + ' reais');
}