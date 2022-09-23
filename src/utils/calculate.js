export const calculate = (calc, setCalc, setResult) => {
    calc ? setCalc(eval(calc).toString()) : setResult('Please, enter a number!')
}