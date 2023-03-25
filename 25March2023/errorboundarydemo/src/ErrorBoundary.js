import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.error) {

            return (
                <>
                    <img src="https://us.123rf.com/450wm/losw/losw2106/losw210600021/170277635-guy-is-working-on-the-computer-or-laptop-and-sees-oops-something-went-wrong-boy-study-or-play-a.jpg?ver=6"></img>
                    <a href="abc">Go back</a>
                </>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
export default ErrorBoundary;