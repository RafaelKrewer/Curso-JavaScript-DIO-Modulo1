const preco = 100;
const formaPagamento = 7;
const parcela = preco * 0.1;
const total = parcela + preco;

switch(formaPagamento){
    case 1:
        console.log('Você escolheu pagar por débito! O preço total será: R$' + preco - preco * 0.1);
        break;
    case 2:
        console.log('Você escolheu pagar por Pix! O preço total do produto será: R$' + preco - preco * 0.15);
        break;
    case 3:
        console.log('Você escolheu pagar à vista! O preco total, sem desconto será de: R$' + preco);
        break;
    case 4:
        console.log( 'Você escolheu pagar em mais de 2X! O preco total será de: R$' + total); 
        break;
    default:
        console.log('Não aceitamos esse formato de pagamento!');
        break;
}
