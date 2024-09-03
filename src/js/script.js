const calcImc = document.getElementById('imcForm')

calcImc.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    const calculadora = new CalculadoraIMC(altura, peso);
    const imc = calculadora.calcularIMC();
    const classificacao = calculadora.classificarIMC(imc);
    
    document.getElementById('resultado').innerText = `${imc.toFixed(2)} | Seu IMC (${classificacao})`;
    
});