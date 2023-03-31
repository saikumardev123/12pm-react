import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

                <Routes>
                    <Route path="/home" element={<Home></Home>}>

                    </Route>
                    <Route path="/login" element={<Login></Login>}>

                    </Route>
                    <Route path="/register" element={<Register></Register>}>

                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
export default Navbar;