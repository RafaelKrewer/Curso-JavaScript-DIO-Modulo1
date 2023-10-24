const preco = 100;
const formaPagamento = 1;
  
if (formaPagamento === 1){
    console.log(preco - preco * 0.1);
} else if(formaPagamento === 2){
    console.log(preco - preco * 0.15);
} else if(formaPagamento === 3){
    console.log(preco);
} else if(formaPagamento === 4){
    console.log(preco + preco * 0.1);
}


