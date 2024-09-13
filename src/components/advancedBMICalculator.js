class AdvancedBMICalculator extends BMICalculator {
    constructor(height, weight, age, gender) {
        super(height, weight);
        this.age = age;
        this.gender = gender;
    }

    getAdvancedResult() {
        const bmi = this.calculate();
        let category = super.getResult();
        if (this.age > 60) {
            category += " (Considerações para idosos)";
        }
        if (this.gender === 'female' && bmi > 24.9) {
            category += " (Considerações para mulheres)";
        }
        return category;
    }
}

module.exports = AdvancedBMICalculator