function VideosList(props) {
    const renderList = () => {
        // code to return a map of video items in an ul.
    }
    console.log(props);
    return (
        <div>
            <h1>VideosList</h1>
            {props.videos.length}

            {renderList()}
        </div>
    )
}
export default VideosList;