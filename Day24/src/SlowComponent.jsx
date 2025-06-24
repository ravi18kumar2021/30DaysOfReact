import { useMemo } from "react";

function slowCalculation(num) {
    console.log('Calculating slow calculation...');
    let result = 0;
    for (let i=1; i<=100000000; i++) {
        result += i;
    }
    console.log('Calculation done!');
    return result + num;
}

export default function SlowComponent({number}) {
    const calculatedValue = useMemo(() => slowCalculation(number), [number]);
    return (
        <h3 className="text-xl my-3"><strong>Expensive Calculation Sum :</strong> {calculatedValue}</h3>
    )
}