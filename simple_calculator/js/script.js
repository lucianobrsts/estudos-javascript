
const num1Element = document.getElementById('num1')
const num2Element = document.getElementById('num2')
const totalElement = document.getElementById('total')
const operationsRadios = document.getElementsByName('sign-area')
const formElement = document.querySelector('form');

const operations = {
    radioAdd: (a, b) => a + b,
    radioMinus: (a, b) => a - b,
    radioMultiply: (a, b) => a * b,
    radioDivision: (a, b) => b !== 0 ? a / b : "Erro: div/0" 
};

function outcome() {
    if(event) event.preventDefault();

    const num1 = Number(num1Element.value)
    const num2 = Number(num2Element.value)
    
    if(num1Element.value === '' || num2Element === '') {
        totalElement.textContent = "Digite os números";
        return;
    }

    const selectedRadio = Array.from(operationsRadios).find(r => r.checked);
      
    let result;

    if(selectedRadio && operations[selectedRadio.id]) {
        result = operations[selectedRadio.id](num1, num2);
    }

    totalElement.textContent = typeof result === 'number' 
    ? result.toLocaleString('pt-BR', { maximumFractionDigits: 4 })
    : result;
}

function clear() {
    formElement.reset();
    totalElement.textContent = "0";
}

document.getElementById('btnCalculate').addEventListener('click', outcome)
document.getElementById('btnClear').addEventListener('click', clear)