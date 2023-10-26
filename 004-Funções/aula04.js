function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(condicao){
    if (condicao < 18.5) {
        return'Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está abaixo do peso!'
    }else if (condicao >= 18.5 && condicao < 25){
        return'Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está no peso normal.'
    }else if (condicao >= 25 && condicao < 30){
        return'Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está acima do peso.'
    }else if (condicao >= 30 && condicao < 40){
        return'Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está com obesidade. Vai caminhar!'
    }else if (condicao >= 40){
        return'Seu índice corporal IMC é de: ' + condicao.toFixed(0) + '!' +' Você está com obesidade grave. Vá ao pronto socorro IMEDIATAMENTE!!'
    }
}

function main(){
    const peso = 54;
    const altura = 1.67;

    const condicao = calcularImc(peso, altura);
    console.log(classificarImc(condicao));
    Math.pow(altura, 2);
}

main();
