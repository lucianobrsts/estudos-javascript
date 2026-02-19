import { useState } from "react";

export const useCalculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('radioAdd');
    const [result, setResult] = useState('0');

    const operations = {
        radioAdd: (a, b) => a + b,
        radioMinus: (a, b) => a - b,
        radioMultiply: (a, b) => a * b,
        radioDivision: (a, b) => b !== 0 ? a / b : "Erro: div/0"
    };

    const calculate = () => {
        if (num1 == '' || num2 === '') {
            setResult("Digite os números");
            return;
        }

        const n1 = Number(num1);
        const n2 = Number(num2);

        const compute = operations[operation]
        const total = compute(n1, n2);

        setResult(
            typeof total === 'number'
                ? total.toLocaleString('pt-BR', { maximumFractionDigits: 4 })
                : total
        );
    };

    const clear = () => {
        setNum1('');
        setNum2('');
        setOperation('radioAdd');
        setResult('0')
    };

    return {
        num1, setNum1,
        num2, setNum2,
        operation, setOperation,
        result, calculate, clear
    };


}