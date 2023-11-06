class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;   
    }

    IMC(){
        return this.peso / (Math.pow(this.altura, 2));
    }
}

Math.pow(this.altura, 2);

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.IMC());

const paulo = new Pessoa ('Paulo', 80, 1,85);
