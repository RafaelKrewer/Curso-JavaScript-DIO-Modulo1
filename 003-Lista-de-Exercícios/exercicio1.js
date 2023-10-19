const nota1 = 9;
const nota2 = 8;
const nota3 = 5;

const notaMedia = (nota1 + nota2 + nota3) / 3;

console.log('Sua nota é ' + notaMedia);

if (notaMedia < 5) {
    console.log('Você rodou, e terá que repetir o ano :(');
} else if (notaMedia >= 5 && notaMedia < 7) {
    console.log('Você ficou em recuperação. Estude mais para passar de ano!');
} else (notaMedia >= 7); {
    console.log('Você passou de ano! Aproveite as férias!');
}

