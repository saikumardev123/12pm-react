import { useState } from "react";
function LoginFBased() {

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const updateUsername = (event) => {
        var value = event.target.value;
        //this.state.username = value;
        setLoginForm({ ...loginForm, username: value });
    }
    const updatePassword = (event) => {
        var value = event.target.value;
        // this.state.password = value;
        //this.setState({ password: value });
        setLoginForm({ ...loginForm, password: value });

    }
    const submitForm = (event) => {
        event.preventDefault();
        console.log(loginForm);
    }
    return (
        <div>
            <form>
                <input type="text" onChange={updateUsername} placeholder="username here"></input> <br></br><br></br>
                <input type="text" onChange={updatePassword} placeholder="password here"></input><br></br><br></br>
                <button onClick={submitForm}>Login</button>
            </form>

        </div>
    )

}

export default LoginFBased;