const precoOriginal = 100; 
const formaDePagamento = 4;

if (formaDePagamento === 1){
    let desconto =  precoOriginal -(precoOriginal * 10/100); 
    // console.log('Você recebeu', (precoOriginal - (precoEtiqeuta*0.1)));
    console.log(desconto);
}else if(formaDePagamento === 2){
     desconto = precoOriginal - (precoOriginal *15/100);
     // console.log('Você recebeu', (precoOriginal - (precoEtiqeuta*0.15)));
     console.log(desconto);
}else if(formaDePagamento === 3){
    desconto = precoOriginal;
    // console.log(precoOriginal);
    console.log(desconto);
}else {
    desconto = precoOriginal + (precoOriginal *10/100); 
    // console.log((precoOriginal + (precoEtiqeuta*0.15)));
    console.log(desconto);
}