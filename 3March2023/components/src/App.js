import './App.css';
import Movies from './Movies';
import Products from './Products';
import Login from './Login';
import LoginFBased from './LoginFBased';
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      {/* <Movies></Movies>
      <Products></Products> */}
      <Login></Login>
      <LoginFBased></LoginFBased>
    </div>
  );
}

export default App;

/*

            App


     Movies        Products

*/
