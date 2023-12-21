const preco = 100;
const pagamento = 4;

function desconto(valor, desconto){
    return(valor - (valor * desconto / 100));
}

function juros(valor, juros){
    return(valor + (valor * (juros / 100)));
}

switch(pagamento){
    case 1:
        console.log('Você escolheu pagar por débito! O preço total do produto será: R$' + desconto(preco, 10).toFixed(2));
        break;
    case 2:
        console.log('Você escolheu pagar por Pix! O preço total do produto será: R$' + desconto(preco, 15).toFixed(2));
        break;
    case 3:
        console.log('Você escolheu pagar em duas vezes! O preco total do produto, sem desconto será: R$' + preco.toFixed(2));
        break;
    case 4:
        console.log('Você escolheu pagar em mais de 2X! O preco total do produto será de: R$' + desconto(preco, 10).toFixed(2)); 
        break;
    default:
        console.log('Não aceitamos esse tipo de cartão!');
        break;
}