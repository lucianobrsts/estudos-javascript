import styles from './Calculator.module.css';
import { useCalculator } from './useCalculator';

const Calculator = () => {
    const { 
        num1, setNum1, num2, setNum2, 
        operation, setOperation, result, 
        calculate, clear 
    } = useCalculator();

    return (
        <div className={styles.calculator}>
            <h1 className={styles.title}>Simple Calculator</h1>
            
            <div className={styles['inputs-numbers']}>
                <input 
                    className={styles.inputs} 
                    type="number" 
                    placeholder="0" 
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input 
                    className={styles.inputs} 
                    type="number" 
                    placeholder="0" 
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>

            <fieldset className={styles.operations}>
                <legend className="sr-only">Choose an option:</legend>
                {/* Mapeamos as opções para evitar repetição de código (Escalabilidade) */}
                {[
                    { id: 'radioAdd', label: '+' },
                    { id: 'radioMinus', label: '-' },
                    { id: 'radioMultiply', label: '*' },
                    { id: 'radioDivision', label: '/' }
                ].map((opt) => (
                    <div key={opt.id}>
                        <input 
                            id={opt.id}
                            type="radio" 
                            name="sign-area" 
                            className={styles.inputsRadios}
                            checked={operation === opt.id}
                            onChange={() => setOperation(opt.id)}
                        />
                        <label htmlFor={opt.id} className={styles['label-radio']}>{opt.label}</label>
                    </div>
                ))}
            </fieldset>

            <div className={styles.actions}>
                <button type="button" className={styles.btns} onClick={calculate}>Calculate</button>
                <button className={styles.btns} onClick={clear}>Clear</button>
            </div>

            <div className={styles.visor} role="status" aria-live="polite">
                <output className={styles.visor}>{result}</output>
            </div>
        </div>
    );
};

export default Calculator;