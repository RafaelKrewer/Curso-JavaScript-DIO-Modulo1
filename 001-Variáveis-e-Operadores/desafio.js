var precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

var valorTotal = litrosConsumidos * precoCombustivel;

var string = 'R$';
console.log(string +  valorTotal.toFixed(2));