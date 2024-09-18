class InterfaceIMC extends CalculadoraIMC {
    constructor(altura, peso) {
        super(altura, peso);
    }

    exibirResultado() {
        const imc = this.calcularIMC();
        const classificacao = this.classificarIMC(imc);
        return `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    }
}

module.exports = interfaceIMC