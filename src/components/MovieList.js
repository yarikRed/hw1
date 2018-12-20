import React from 'react'
import Movie from './Movie'


export default function MovieList ({movies}){
    return (
        <ul className='movie-list'>
            <li><Movie movie = {movies[0]}/></li>
            <li><Movie movie = {movies[1]}/></li>
        </ul>
    )

}