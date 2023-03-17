
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import VideosList from './VideosList';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
const API_KEY = "";
function App() {
  const [videosList, setVideosList] = useState(
    {
      videos: [],
      selectedVideo: null
    }
  )

  const updateSelectedVideo = (video) => {
    setVideosList({
      ...videosList,
      selectedVideo: video
    });
  }
  const makeAPICallToYoutube = (searchTerm) => {
    var API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video&maxResults=30`;
    axios.get(API_URL).then(
      response => {
        console.log(response.data);
        setVideosList({
          ...videosList,
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      },
      error => {
        console.log(error);
      }
    )
  }
  useEffect(
    () => {
      console.log("use effect called");
      makeAPICallToYoutube('cricket');
    }, []
  )

  const searchTermUpdate = (term) => {
    makeAPICallToYoutube(term);
  }
  return (
    <div>

      <SearchBar onSearchtermChange={(searchTerm) => {
        searchTermUpdate(searchTerm);
      }} ></SearchBar> <br></br><br></br>
      <VideoPlayer selectedVideo={videosList.selectedVideo}></VideoPlayer>
      <VideosList onVideoSelect={(data) => {
        updateSelectedVideo(data);
      }} videos={videosList.videos}></VideosList>
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