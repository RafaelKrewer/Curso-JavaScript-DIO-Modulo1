const peso = 54;
const altura = 1.67;
const condicao = peso / (altura * altura);

Math.pow(altura,2);

if (condicao < 18.5) {
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '.' + ' Você está abaixo do peso!')
} else if (condicao >= 18.5 && condicao < 25) {
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '.' + ' Você está no peso normal!')
} else (condicao >= 25 && condicao < 30); {
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '.' + ' Você acima do peso!')
} if (condicao >= 30 && condicao < 40) {
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '.' + ' Você tem obesidade! Vai caminhar!')  
} else if (condicao >= 40) {
    console.log('Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '.' + ' Você está com obesidade grave. Vá ao pronto socorro IMEDIATAMENTE!')
}

