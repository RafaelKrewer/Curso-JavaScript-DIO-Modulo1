const preco = 1749.90;
const formaPagamento = 3;
const parcela = preco * 0.1;
const total = parcela + preco;

switch(formaPagamento){
    
    case 1:
        console.log('Você escolheu pagar por Pix! O preço total do produto será: R$' + preco - preco * 0.15);
        break;
    case 2:
        console.log('Você escolheu pagar à vista! O preco total do produto, sem desconto será de: R$' + preco);
        break;
    case 3:
        console.log('Você escolheu pagar em mais de 2X! O preco total do produto será de: R$' + total); 
        break;
    default:
        console.log('Não aceitamos esse tipo de cartão!');
        break;
}
