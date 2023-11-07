class Carro{
    marca;
    cor;
    gasto;

    constructor(marca, cor, gasto){
        this.marca = marca;
        this.cor = cor;
        this.gasto = gasto;
    }

    gastoViagem(distancia, preco){
        return distancia * this.gasto * preco;
    }
}

const Spin = new Carro('Chevrolet', 'Cinza', 1 / 10.4);
const Livina = new Carro('Nissan', 'Vermelho', 1 / 10);

console.log(Spin.gastoViagem(16.3, 5.69));
console.log(Livina.gastoViagem(16.3, 5.69));