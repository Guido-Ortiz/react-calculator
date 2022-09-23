import React, { useState } from 'react'
import { calculate } from '../../utils/calculate';
import { clear } from '../../utils/clear';
import { deleteInput } from '../../utils/deleteInput';
import { digits } from '../../utils/digits';
import { handleClick } from '../../utils/handleClick';
import s from './Calculator.module.css';

const Calculator = () => {

    const [calc, setCalc] = useState('')
    const [result, setResult] = useState('')

    return (
        <div className={s.grid}>
            <div className={s.result}>
                {result
                    ? <span>({result})</span>
                    : '(0)'
                } &nbsp;
                {calc || '0'}
            </div>

            <div className={s.operators}>
                <button onClick={() => handleClick('/', calc, setCalc, setResult)}>/</button>
                <button onClick={() => handleClick('*', calc, setCalc, setResult)}>*</button>
                <button onClick={() => handleClick('+', calc, setCalc, setResult)}>+</button>
                <button onClick={() => handleClick('-', calc, setCalc, setResult)}>-</button>
            </div>

            <div className={s.deletes}>
                <button onClick={() => clear(setCalc, setResult)} className={s.btnClear}>Clear</button>
                <button onClick={() => deleteInput(calc, setCalc)} className={s.btn}>Del</button>
            </div>

            <div className={s.digits}>
                {digits(calc, setCalc, setResult)}
            </div>

            <div className={s.equals}>

                <button onClick={() => handleClick('0', calc, setCalc, setResult)} className={s.btn}>0</button>
                <button onClick={() => handleClick('.', calc, setCalc, setResult)} className={s.btn}>.</button>

                <button onClick={() => calculate(calc, setCalc, setResult)} className={s.btnEqual}>=</button>
            </div>
        </div>
    )
}

export default Calculator