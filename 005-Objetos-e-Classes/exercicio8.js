class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;   
    }

    calcIMC(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classIMC(){
        const imc = this.calcIMC();
    }
}

Math.pow(this.altura, 2);

const jose = new Pessoa('José', 70, 1.75);
const paulo = new Pessoa('Paulo', 80, 1.85);
console.log(jose.calcIMC());
console.log(paulo.calcIMC());
