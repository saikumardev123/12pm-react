import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const API_KEY = "AIzaSyCUcjp6sD1wa_8chtI4 - aLfdDEKgfg3w_Y";
function App() {
  useEffect(
    () => {
      console.log("use effect called")
      var API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=java&type=video&maxResults=5`;
      axios.get(API_URL).then(
        response => {
          console.log(response.data);
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


/*

Steps: 

1. maintain the list of videos in useState 

2. create a video list component 

3. send videolist from app component to videolist component and access it 
through props.

 {props.videos.length}


*/