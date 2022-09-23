export const deleteInput = (calc, setCalc) => {
    if(calc === '') return
    const value = calc.slice(0, -1)
    setCalc(value)
}