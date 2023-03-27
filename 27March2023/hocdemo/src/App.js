import './App.css';
import ProductsHOC from './Products';
import SellersHOC from './Sellers';
import UsersHOC from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductsHOC></ProductsHOC>
        <SellersHOC></SellersHOC>
        <UsersHOC></UsersHOC>
      </header>
    </div>
  );
}

export default App;
