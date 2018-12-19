import React, {Component} from "react";

class Movie extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {movie} = this.props
        const body = <section>{movie.text}</section>;
        const movieDetails = <p>{movie.certificate} {movie.duration} {movie.genres} {movie.metascore} Metascore</p>
        const watchTrailer = this.state.isOpen && <div><iframe title={movie.uniqueTitle} width="560" height="315" src={movie.trailer}></iframe></div>

        return (
            <div>
                <h2>{movie.title}</h2>
                {body}
                <h3>creation date: {(new Date(movie.date)).toDateString()}</h3>
                {movieDetails}
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? "Close trailer" : "Watch trailer"}
                </button>
                {watchTrailer}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}


export default Movie

