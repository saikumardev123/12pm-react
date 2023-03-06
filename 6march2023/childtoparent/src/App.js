import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

function App() {

  const getMovies = (movies) => {
    console.log("movies", movies);
  }

  return (
    <div className="App">

      <Movies onSetMovies={
        function (m) {
          getMovies(m);
        }
      }></Movies>

    </div>
  );
}

export default App;
