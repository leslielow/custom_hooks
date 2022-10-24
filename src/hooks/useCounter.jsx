import { useState } from "react"

const UseCounter = () => {

    const [counter, setCounter] = useState(1);

    const incrementar = () => {
        setCounter(counter => counter + 1)
    };

    const decrementar = () => {
        setCounter(counter => counter -1)
    };

    return [
        counter,
        incrementar,
        decrementar
    ];
}

export default UseCounter;