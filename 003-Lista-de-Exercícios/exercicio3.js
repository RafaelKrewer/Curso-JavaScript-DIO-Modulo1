const preco = 100;
const formaPagamento = 2;

/*if (formaPagamento === 1){
    console.log(preco - preco * 0.1);
} else if(formaPagamento === 2){
    console.log(preco - preco * 0.15);
} else if(formaPagamento === 3){
    console.log(preco);
} else if(formaPagamento === 4){
    console.log(preco + preco * 0.1);
}*/

switch(formaPagamento){
    case 1:
        console.log('Você escolheu pagar por débito! O preço total será: ' + preco - preco * 0.1);
        break;
    case 2:
        console.log(preco - preco * 0.15);
        break;
    case 3:
        console.log(preco);
        break;
    case 4:
        console.log(preco + preco * 0.1);
        break;
        default:
        break;
}
