const { gets, print } = require('./main');
const media = gets();

if (media < 5) {
    print('Reprovado');
}
else if (media >= 5 && media < 7) {
    print('Recuperação');
}
else {
    print('Aprovado');
}

/*switch (media) {
    case media > 5:
        print('Reprovado');
        break;
    case media >= 5 && media < 7:
        print('Recuperação');
        break;
    case media >= 7:
        print('Aprovado');
        break;
    default:
        print('Erro :(')
        break;
}*/





