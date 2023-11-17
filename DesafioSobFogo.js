class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;   
    }

    print(){
        console.log(this.nome, this.altura, this.peso);
    }

    calcIMC(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classIMC(){
        const imc = this.calcIMC();
        
        if (imc < 18.5) {
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está abaixo do peso!');
        } else if (imc >= 18.5 && imc < 25){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está no peso normal!');
        } else if (imc > 25 && imc < 30){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está acima do peso!');
        } else if (imc >= 30 && imc < 40){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +'Você está com obesidade! Vai caminhar!');
        } else if(imc >= 40){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está com obesidade grave. Vá ao pronto socorro IMEDIATAMENTE!');
        }
    }
}

    function descrever(pessoas){
      pessoas.forEach(function(pessoa){
        pessoa.print();
        
      });  
    }

Math.pow(this.altura, 2);
const rafael = new Pessoa('Rafael', 55, 1.67);
const cesar = new Pessoa('César', 88, 1.83);
let pessoas = [];
pessoas.push(rafael);
pessoas.push(cesar);

descrever(pessoas);


