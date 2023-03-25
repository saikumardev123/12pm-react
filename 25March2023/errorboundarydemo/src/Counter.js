import React, { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0);

    if (counter == 5) {
        throw new Error("Counter exceeded!");
    }

    return (
        <React.Fragment>
            <h1>The counter value is {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Increment</button>
        </React.Fragment>
    )
}
export default Counter;