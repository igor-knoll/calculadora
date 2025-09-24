"use client";

import { useState } from "react";
import styles from "./calculator.module.css";

export default function Calculator() {
    const [input, setInput] = useState("");
    const [isResult, setIsResult] = useState(false);

    const handleClick = (value) => {
        if (isResult && !isNaN(value)) {
            // Se o último foi resultado e clicou em número, reseta
            setInput(value.toString());
            setIsResult(false);
        } else {
            setInput(input + value);
            setIsResult(false);
        }
    };

    const handleClear = () => {
        setInput("");
        setIsResult(false);
    };

    const handleCalculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setInput(eval(input).toString());
            setIsResult(true);
        } catch {
            setInput("Erro");
            setIsResult(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
                {/* Display */}
                <div className={styles.display}>{input || "0"}</div>

                {/* Botões */}
                <div className={styles.grid}>
                    {/* Linha 1 */}
                    <button onClick={handleClear} className={`${styles.button} ${styles.gray} ${styles.span2}`}>C</button>
                    <button onClick={() => handleClick("/")} className={`${styles.button} ${styles.orange}`}>÷</button>
                    <button onClick={() => handleClick("*")} className={`${styles.button} ${styles.orange}`}>×</button>

                    {/* Linha 2 */}
                    {[7, 8, 9].map((num) => (
                        <button key={num} onClick={() => handleClick(num.toString())} className={`${styles.button} ${styles.dark}`}>
                            {num}
                        </button>
                    ))}
                    <button onClick={() => handleClick("-")} className={`${styles.button} ${styles.orange}`}>−</button>

                    {/* Linha 3 */}
                    {[4, 5, 6].map((num) => (
                        <button key={num} onClick={() => handleClick(num.toString())} className={`${styles.button} ${styles.dark}`}>
                            {num}
                        </button>
                    ))}
                    <button onClick={() => handleClick("+")} className={`${styles.button} ${styles.orange}`}>+</button>

                    {/* Linha 4 */}
                    {[1, 2, 3].map((num) => (
                        <button key={num} onClick={() => handleClick(num.toString())} className={`${styles.button} ${styles.dark}`}>
                            {num}
                        </button>
                    ))}
                    <button onClick={handleCalculate} className={`${styles.button} ${styles.orange} ${styles.span2row}`}>=</button>

                    {/* Linha 5 */}
                    <button onClick={() => handleClick("0")} className={`${styles.button} ${styles.dark} ${styles.span2}`}>0</button>
                    <button onClick={() => handleClick(".")} className={`${styles.button} ${styles.dark}`}>.</button>
                </div>
            </div>
        </div>
    );
}
