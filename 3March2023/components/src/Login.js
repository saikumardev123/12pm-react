import React from 'react';
class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    updateUsername = (event) => {
        var value = event.target.value;
        //this.state.username = value;
        this.setState({ username: value });

    }
    updatePassword = (event) => {
        var value = event.target.value;
        // this.state.password = value;
        this.setState({ password: value });

    }
    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        console.log("render");
        // logic
        return (
            <div>
                <form>
                    <input type="text" onChange={this.updateUsername} placeholder="username here"></input> <br></br><br></br>
                    <input type="text" onChange={this.updatePassword} placeholder="password here"></input><br></br><br></br>
                    <button onClick={this.submitForm}>Login</button>
                </form>
                {this.state.username}
            </div>
        )

    }
}

export default Login;



