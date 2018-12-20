import React from "react";
import MovieList from './MovieList';
import movies from '../source';

function App(){
    return (
        <div>
            <div>
                <h1 className='logo'>MyMDb</h1>
            </div>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App