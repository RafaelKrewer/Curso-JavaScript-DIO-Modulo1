const nota1 = 4;
const nota2 = 4;
const nota3 = 5;

const notaMedia = (nota1 + nota2 + nota3) / 3;
const notaTotal = notaMedia;

//console.log('Sua nota é ' + notaMedia.toFixed(1));

/*if (notaMedia < 5) {
    console.log('Você rodou, e terá que repetir o ano :(');
}else if (notaMedia >= 5 && notaMedia < 7) {
    console.log('Você ficou em recuperação. Estude mais para passar de ano!');
}else if (notaMedia >= 7); {
    console.log('Você passou de ano! Aproveite as férias :)');
}*/

switch(notaTotal){
    case notaMedia < 5:
        console.log('Você rodou, e terá que repetir o ano :(');
        break;
    case notaMedia >= 5 && notaMedia < 7:
        console.log('Você ficou em recuperação. Estude mais para passar de ano!');
        break;
    case notaMedia >= 7:
        console.log('Você passou de ano! Aproveite as férias :)');
    }