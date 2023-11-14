const entradas = [10, 5, 50, 74, 98, 23, 41, 12, 15, 60, 83];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};