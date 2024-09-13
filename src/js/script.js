const BmiCalculator = require('./BMICalculator')
const advancedBMICalculator = require('./AvancedBMICalculator')

function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age = 30;
    const gender = 'male';
    const bmiCalculator = new AdvancedBMICalculator(height, weight, age, gender);
    document.getElementById('result').innerText = bmiCalculator.getAdvancedResult();
}


