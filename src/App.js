import React, { useState } from "react";
import './App.css';
import { moviesData } from "./component/moviesData";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";


function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const addMovie = e => {
    e.preventDefault();
    let newMovie = {
      name: name,
      
      image: image,
      
      description: description
    };
    return setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="App">
      <div className="App-header">Movie App</div>
      <MovieList
        moviesData={moviesList}
      />
      <AddMovie
        addMovie={addMovie}
        setName={setName}
        setImage={setImage}
        setDescription={setDescription}
      />
    </div>
  );
}

export default App;
