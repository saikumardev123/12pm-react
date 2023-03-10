import React from 'react';
import { useState } from 'react';
function Login() {

    const firstField = React.createRef();
    const secondField = React.createRef();

    const [fields, setFields] = useState(
        {
            firstField: '',
            secondField: ''
        }
    )
    const submit = (event) => {
        event.preventDefault();
        var firstFieldValue = firstField.current.value;
        secondField.current.value = firstFieldValue;
        setFields({ firstField: firstFieldValue, secondField: secondField.current.value });
        console.log(secondField);
    }
    return (
        <div>
            <br></br> <br></br> <br></br>
            <form style={{ "textAlign": "center" }}>
                <input ref={firstField} size="30" type="text" placeholder="first field"></input> <br></br><br></br><br></br>
                <input ref={secondField} size="30" type="text" placeholder="second field"></input><br></br><br></br><br></br>
                <button onClick={submit}>Submit</button>
            </form>

            {fields.firstField}
            <br></br>
            {fields.secondField}
        </div>
    )
}
export default Login;