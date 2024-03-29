function VideosList(props) {
    const renderList = () => {
        // code to return a map of video items in an ul. 

        var list = props.videos.map(video => {
            return <li><img src={video.snippet.thumbnails.default.url}></img></li>
        })

        return list;

        //videos[0].snippet.thumbnails.default.url
    }
    console.log(props);
    return (
        <div>
            <h1>VideosList</h1>
            {props.videos.length}
            <ul>
                {renderList()}
            </ul>

        </div>
    )
}
export default VideosList;