import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
const API_KEY = "AIzaSyCUcjp6sD1wa_8chtI4 - aLfdDEKgfg3w_Y";
function App() {
  useEffect(
    
    () => {
      console.log("use effect called")
      var API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=java&type=video&maxResults=5`;
      axios.get(API_URL).then(
        responsae => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

    }, []
  )
  return (
    <div>
      <h1>I am in App</h1>
    </div>
  );
}
export default App;

/*

https://www.googleapis.com/youtube/v3/search?part=snippet&key=&q=java&type=video&maxResults=5

*/
