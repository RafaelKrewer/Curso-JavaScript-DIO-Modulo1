const ``

class Pessoa{
    nome;
    nota1;
    nota2;
    nota3;

    constructor(nome, nota1, nota2, nota3) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    calculoNota() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    classificarNota() {
        const media = this.calculoNota;
     
        switch(media) {
            case media < 5:
                console.log(('Sua nota é' + media + 'Reprovado'));
                break;
            case media >= 5 && media < 7:
                console.log(('Sua nota é' + media + 'Recuperação'));
                break;
            case media >= 7:
                console.log(('Sua nota é' + media + 'Aprovado'));
                break;
        }
    }
}

const jose = new Pessoa('José', 5, 4, 8);
const calculoNota = (this.nota1 + this.nota2 + this.nota3) / 3;

console.log(jose.calculoNota());
console.log(jose.classificarNota());