import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import { useState } from 'react';

function App() {
  const [allMovies, setAllMovies] = useState([]);

  const renderList = () => {
    var list = allMovies.map(function (movie) {
      return <li key={movie.name}> {movie.name} {movie.runtime}</li>
    })
    return list;
  }
  const getMovies = (movies) => {
    console.log("movies", movies);
    if (allMovies.length == 0) {
      setAllMovies(movies);
    }
  }
  return (
    <div className="App">

      <Movies onSetMovies={
        function (m) {
          getMovies(m);
        }
      }></Movies>

      {allMovies.length > 0 ? <ul>{renderList()}</ul> : "Movies not available"}

    </div>
  );
}
export default App;

/*


<Movies x="function(y){
    console.log(movies);
}"></Movies>

x(movies);






*/