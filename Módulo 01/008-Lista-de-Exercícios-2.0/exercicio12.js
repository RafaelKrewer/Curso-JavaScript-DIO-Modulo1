class Pessoa{
    nome;
    nota1;
    nota2;
    nota3;

    constructor(nome, nota1, nota2, nota3){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    calculoNota(){
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    classificarNota(){
        const media = this.calculoNota;
        if (media < 5) {
            return('Reprovado');
        } else if (media >= 5 && media < 7){
            return('Recuperação');
        } else if (media >= 7){
            return('Aprovado');
        }
    }
}

const jose = new Pessoa('José', 5, 4, 8);

console.log(jose.calculoNota());