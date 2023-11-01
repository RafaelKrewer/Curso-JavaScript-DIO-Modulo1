class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - this.idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}`);         
    }
}

const rafael = new Pessoa('Rafael', 15);
const cesar = new Pessoa('César', 45);

console.log(rafael);