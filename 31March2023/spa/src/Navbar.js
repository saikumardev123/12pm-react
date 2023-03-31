import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login.js';
import Register from './Register';
import './Navbar.css';
function Navbar() {
    return (
        <div>
            <Router>
                <Link className="linkClass" to="/home">Home</Link>
                <Link className="linkClass" to="/login">Login</Link>
                <Link className="linkClass" to="/register">Register</Link>

                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Navbar;