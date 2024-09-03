class CalculadoraIMC {
    constructor(altura, peso,imc) {
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Sobrepeso';
        } else {
            return 'Obesidade';
        }
    }
}