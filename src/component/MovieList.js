import React from 'react'
import  MovieCard from './MovieCard'
const MovieList = ({ moviesData }) => {

    return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {moviesData.map((el, i) => (
            <MovieCard key={i} movie={el} />
          ))}
      </div>
    );
  };

export default MovieList
