
import React from 'react';

class Counter extends React.Component {
    constructor() {
        console.log("Constructor called");
        super();
        this.state = {
            counter: 0
        }
    }
    updateState = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    componentDidMount() {
        console.log("component did mount is called");
    }

    forceRender = () => {
        this.forceUpdate(() => {
            console.log("force update called");
        });
    }
    componentDidUpdate() {
        console.log("component did update is called");
        // any logic after state updation
    }
    render() {
        console.log("render called");
        return (
            <div>
                <h1 onClick={this.updateState}>The current count is {this.state.counter}</h1>
                <h1>The count of users in Counter component is {this.props.users.length}</h1>
                <button onClick={this.forceRender}>Force Render</button>
            </div>
        )
    }
}
export default Counter;