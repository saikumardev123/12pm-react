
import React from 'react';
class Movies extends React.Component {

    movie = {
        name: "some movie",
        runtime: 155,
        releaseDate: "12 March 2023"
    }

    render() {
        return (
            <div>
                <h1>Movies Component!</h1>
                <h1>{this.movie.name} {this.movie.runtime} {this.movie.releaseDate}</h1>
            </div>
        )
    }
}
export default Movies;
