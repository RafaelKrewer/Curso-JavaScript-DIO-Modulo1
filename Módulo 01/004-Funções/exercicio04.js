function escreveMeuNome(nome){
    return nome;
}

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escreveMeuNome('Rafael') + ',' +' Você é maior de idade!');    
    }else if(idade < 18){
        console.log(escreveMeuNome('Rafael') + ',' + ' Você é menor de idade!');
    }
}
verificarIdade(15);

