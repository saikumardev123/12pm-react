function Movies(props) {
    console.log(props);
    return (
        <div>
            <h1>Movies Component</h1>

            {props.moviesList[0].name}  &nbsp;&nbsp;&nbsp;&nbsp;
            {props.moviesList[0].runtime}  <br></br>
            {props.moviesList[1].name}  &nbsp;&nbsp;&nbsp;&nbsp;
            {props.moviesList[1].runtime} <br></br>
            {props.moviesList[2].name}  &nbsp;&nbsp;&nbsp;&nbsp;
            {props.moviesList[2].runtime}
        </div>
    )
}
export default Movies;