const imc = document.getElementById('imcForm')

imc.addEventListener('submit', function(event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const calculadora = new InterfaceIMC(altura, peso);
    const resultado = calculadora.exibirResultado();

    document.getElementById('resultado').innerText = resultado;
});
