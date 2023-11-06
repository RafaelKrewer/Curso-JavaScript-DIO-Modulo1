class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever(){
        return(`${this.nome}, seu índice IMC é de: ${imc.toFixed(0)}`);    
    }
}

const rafael = new Pessoa('Rafael', 54, 1.67);
const cesar = new Pessoa('César', 90, 1.83);


    function calcularIMC(){
    return rafael.peso / Math.pow(rafael.altura, 2);
}

Math.pow(rafael.altura, 2);

let imc = calcularIMC(rafael.peso, rafael.altura);

    if(imc < 18.5){
        console.log(rafael.descrever());
        console.log('Você está abaixo do peso!');
    } else if(imc >= 18.5 && imc < 25){
        console.log(rafael.descrever());
        console.log('Você está no peso ideal!');
    } else if(imc > 25 && imc < 30){
        console.log(rafael.descrever());
        console.log('Você está acima do peso!');
    } else if(imc >= 30 && imc < 40){
        console.log(rafael.descrever());
        console.log('Você está com obesidade!');
    } else{
        console.log(rafael.descrever());
        console.log('Você está com obesidade grave!');
    }
    
   