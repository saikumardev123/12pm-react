function VideoPlayer(props) {

    if (props.selectedVideo == null) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    else {
        //selectedVideo.id.videoId

        var url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
        return (
            <div>
                <iframe width="560" height="315" src={url} title="YouTube video player"></iframe>

            </div>
        )
    }
}
export default VideoPlayer;