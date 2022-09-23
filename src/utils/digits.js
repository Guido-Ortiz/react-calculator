import { handleClick } from "./handleClick"
import s from '../components/calculator/Calculator.module.css'

export const digits = (calc, setCalc, setResult) => {
    const digits = []

    for(let i = 1; i < 10; i++){
        digits.push(
            <button key={i} onClick={() => handleClick(i.toString(), calc, setCalc, setResult)} className={s.btn}>{i}</button>
        )
    }
    return digits
}