import logo from './logo.svg';
import './App.css';
import User from './User';
import AppContext from './AppContext';

function App() {

  const token = "SBVJSVKBSVKB1346543";

  return (
    <div className="App">
      <AppContext.Provider value={token}>
        <User></User>
      </AppContext.Provider>

    </div>
  );
}

export default App;
