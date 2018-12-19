import React from "react";
import MovieList from './MovieList';
import movies from '../source';

function App(){
    return (
        <div>
            <h1>MyMDb</h1>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App