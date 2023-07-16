import { useEffect, useState } from "react";

const useFetchMovies = (url:string): Movie[] | null => {
    const [movies, setMovies] = useState<Movie[] | null>(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const res = await fetch(url);
          const data = await res.json();
  
          const movieData: Movie[] = data.results.map((movie: any) => ({
            title: movie.title,
            releaseDate: movie.release_date,
            genres: movie.genre_ids,
            rate: movie.vote_average,
            imgPath: movie.poster_path,
          }));
  
          setMovies(movieData);
        } catch (error) {
          console.error("Error fetching movies:", error);
          setMovies(null);
        }
      };
  
      fetchMovies();

      return () => setMovies(null);
    }, []);
  
    return movies;
  };
  
  export default useFetchMovies;