const { gets, print } = require('./main');
const media = gets();
const rodou = 'foi reprovado';
const recuperacao = 'ficou em recuperação';
const passou = 'foi aprovado';

print('Parabéns, sua nota é: ' + media);

if (media < 5) {
    print('Você ' + rodou + '!');
} else if (media >= 5 && media < 7) {
    print('Você ' + recuperacao + '!');
} else if (media >= 7) {
    print('Você ' + passou + '!');
} else {
    print('Número Inválido');
}







