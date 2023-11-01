/*const peso = 54;
const altura = 1.67;
const condicao = peso / Math.pow(altura, 2);

Math.pow(altura, 2);

if (condicao < 18.5) {
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está abaixo do peso!')
}else if (condicao >= 18.5 && condicao < 25){
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está no peso normal!')
}else if (condicao > 25 && condicao < 30){
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está acima do peso!')
}else if (condicao >= 30 && condicao < 40){
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +'Você está com obesidade! Vai caminhar!')
}else if(condicao >= 40){
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está com obesidade grave. Vá ao pronto socorro IMEDIATAMENTE!')
}*/

class Pessoa{
    nome;
    peso;
    altura;

    descrever(){
        return(`${this.nome}, seu índice IMC é de: ${imc}`);    
    }
}

const rafael = new Pessoa();
rafael.nome = 'Rafael';
rafael.peso = 54;
rafael.altura = 1.67;

if (rafael)function calcularIMC(peso, altura){
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
} else if(imc >= 40){
    console.log(rafael.descrever());
    console.log('Você está com obesidade grave!');
}
