const operators = ['/', '*', '+', '-', '.']

export const handleClick = (value, calc, setCalc, setResult) => {

    if((operators.includes(value) && calc === '') || (operators.includes(value) && operators.includes(calc.slice(-1)))) return
    
    setCalc(calc + value)

    if(!operators.includes(value)){
        setResult(eval(calc + value.toString()))
    } 
}