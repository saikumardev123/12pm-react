
function Movies(props) {

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

    props.onSetMovies(movies);

    return (
        <div>
            <h1>Movies Component</h1>
        </div>
    )

}
export default Movies;