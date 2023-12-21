const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

const notaMedia = (nota1 + nota2 + nota3) / 3;
const notaTotal = notaMedia;

if (notaMedia < 5) {
    console.log('Reprovado');
} else if (notaMedia >= 5 && notaMedia < 7) {
    console.log('Recuperação');
} else if (notaMedia >= 7) {
    console.log('Aprovado');
} else {
    console.log('Número inválido');
}

