import React, {Component} from "react"
import './css/style.css'

class Movie extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {movie} = this.props

        const image = (<div className='movie-poster'>
                            <img src={movie.img}/>
                       </div>)

        const title = (<h4>{movie.title} ({movie.date})</h4>)

        const body = (<div className='text-section'>{movie.text}</div>)

        const movieDetails = (<div className='cert-runtime-genre'>
                                <span className='certificate'> {movie.certificate}</span>
                                <span className='runtime'> {movie.duration} min</span>
                                <span>{movie.genres}</span>
                                <div className='rating'>
                                    <span className='metascore'> {movie.metascore}</span>
                                    <span> Metascore</span>
                                </div>
                              </div>)

        const button = (<div>
                            <button onClick={this.handleClick} className='button-trailer'>
                                {this.state.isOpen ? "Close trailer" : "Watch trailer"}
                            </button>
                        </div>)

        const watchTrailer = (this.state.isOpen && <div className='trailer-frame'><iframe title={movie.uniqueTitle} width="660" height="415" src={movie.trailer}></iframe></div>)

        return (
            <div className='movie-section'>
                {image}
                {title}
                {movieDetails}
                {body}
                {button}
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

