const preco = 100;
const pagamento = 2;
const parcela = preco * 0.1;
const total = parcela + preco;
const pix = preco - (preco * 0.15);
const debito = preco - (preco * 0.1);

switch(pagamento){
    case 1:
        console.log('Você escolheu pagar por débito! O preço total do produto será: R$' + debito.toFixed(2));
        break;
    case 2:
        console.log('Você escolheu pagar por Pix! O preço total do produto será: R$' + pix.toFixed(2));
        break;
    case 3:
        console.log('Você escolheu pagar em duas vezes! O preco total do produto, sem desconto será de: R$' + preco.toFixed(2));
        break;
    case 4:
        console.log('Você escolheu pagar em mais de 2X! O preco total do produto será de: R$' + total.toFixed(2)); 
        break;
    default:
        console.log('Não aceitamos esse tipo de cartão!');
        break;
}
    