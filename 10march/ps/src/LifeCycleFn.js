import { useEffect, useState } from "react";

function LifeCycleFn() {

    const [count, setCounter] = useState({
        counter: 0
    })

    useEffect(() => {
        console.log("use effect called");
        return () => {
            console.log("cleanup called");
        }
    }, []);

    return (
        <div>
            <h1>Life Cycle Mechanism</h1>

            <h1 onClick={() => { setCounter({ counter: count.counter + 1 }) }}>{count.counter}</h1>
        </div>
    )

}
export default LifeCycleFn;