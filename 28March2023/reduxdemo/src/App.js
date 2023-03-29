import logo from './logo.svg';
import './App.css';
import Products from './Containers/Products';
import ProductsRetrieve from './Containers/ProductsRetrieve';

function App() {
  return (
    <div className="App">
      <Products></Products>
      <ProductsRetrieve></ProductsRetrieve>
    </div>
  );
}

export default App;
