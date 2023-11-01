class Pessoa {
    nome;
    idade;

    constructor(){
            this.nome = 'nome';
            this.idade = 'idade';
        }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);         
    }
}

const rafael = new Pessoa('Rafael', 15);



const cesar = new Pessoa();
cesar.nome = 'César';
cesar.idade = 45;
console.log(cesar)

cesar.descrever();
rafael.descrever();