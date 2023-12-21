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

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);  
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`); 
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const rafael = new Pessoa('Rafael', 15, 2008);
const cesar = new Pessoa('César', 45, 1978);

compararPessoas(rafael, cesar);