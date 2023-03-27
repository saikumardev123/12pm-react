import { useState } from 'react';
function HOC(data, Component) {
    console.log("data", data);
    const Comp = () => {
        const [counter, setCounter] = useState(data);
        const updateCounter = () => {
            setCounter(counter + 1);
        }
        return <Component counter={counter} updateCounter={updateCounter} ></Component>
    }
    return Comp;
}
export default HOC;