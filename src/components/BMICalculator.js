class BMICalculator {
    #weight
    #height
    constructor(height, weight) {
        this.#height = height;
        this.#weight = weight;
    }

    calculate() {
        return this.#weight / (this.#height * this.#height)
    }

    getResult() {
        const bmi = this.calculate();
        if (bmi < 18.5) {
            return `Seu IMC é ${bmi.toFixed(2)} (Abaixo do peso)`;
        } else if (bmi < 24.9) {
            return `Seu IMC é ${bmi.toFixed(2)} (Peso normal)`;
        } else if (bmi < 29.9) {
            return `Seu IMC é ${bmi.toFixed(2)} (Sobrepeso)`;
        } else {
            return `Seu IMC é ${bmi.toFixed(2)} (Obesidade)`;
        }
    }
}

module.exports = BMICalculator