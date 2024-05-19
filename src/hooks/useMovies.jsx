import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  const [movies, setMovies] = useState([]);


  async function getMovies(id) {
    axios(
    //`https://api.themoviedb.org/3/movie/${id}?api_key=36eef0f3ec35bf9f2c93121f86888240`
    `https://api.themoviedb.org/3/movie/popular?api_key=36eef0f3ec35bf9f2c93121f86888240`
    )
      .then(({ data }) => {
        
        setMovies(data.results);
        console.log(data)
      })
      .catch((error) => console.log(error));
  }

  return {
    movies,
    getMovies,
  };
}

