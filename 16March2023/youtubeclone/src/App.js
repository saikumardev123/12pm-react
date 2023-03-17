
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import VideosList from './VideosList';
import VideoPlayer from './VideoPlayer';
const API_KEY = "AIzaSyDlenGQKX3SqsLVSzL6AZKpV4FU0SQah0o";
function App() {
  const [videosList, setVideosList] = useState(
    {
      videos: []
    }
  )
  useEffect(
    () => {
      console.log("use effect called")
      var API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=react&type=video&maxResults=5`;
      axios.get(API_URL).then(
        response => {
          console.log(response.data);
          setVideosList({
            videos: response.data.items
          });
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
      <VideoPlayer></VideoPlayer>
      <VideosList videos={videosList.videos}></VideosList>
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