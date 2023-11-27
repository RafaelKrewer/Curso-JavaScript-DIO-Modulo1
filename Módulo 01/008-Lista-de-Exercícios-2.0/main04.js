const { gets, print } = require('./exercicio14');

const salarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
};

function percentualImpostoComBaseNoSalario(salario) {

    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }

};

print(percentualImpostoComBaseNoSalario(salarioBruto));