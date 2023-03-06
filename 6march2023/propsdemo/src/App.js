import Movies from "./Movies"
import User from "./User";

function App() {
  const movies = [{
    name: "movie1",
    runtime: "120 mins"
  },
  {
    name: "movie2",
    runtime: "130 mins"
  },
  {
    name: "movie3",
    runtime: "140 mins"
  }]
  var token = "newtoken";
  return (
    <div className="App">
      {/* <Movies moviesList={movies}></Movies> */}
      <User token={token}></User>
    </div>
  );
}
export default App;
