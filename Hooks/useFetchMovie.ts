import { useEffect, useState } from "react";

const useFetchMovie = (url:string): FullMovie | null => {
    const [movie, setMovie] = useState<FullMovie | null>(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const res = await fetch(url);
          const data = await res.json();

        setMovie({
          title: data.title,
          releaseDate: data.release_date,
          genres: data.genre_ids,
          rate: data.vote_average,
          imgPath: data.poster_path,
          backdropPath: data.backdrop_path,
          overview: data.overview,
          status:data.status,
          tagline: data.tagline,
          budget:data.budget,
          revenue:data.revenue,
          originalLanguage: data.original_language,
          homepage: data.homepage,
        });
       
        } catch (error) {
          console.error("Error fetching movies:", error);
          setMovie(null);
        }
      };
  
      fetchMovies();

      return () => setMovie(null);
    }, []);
  
    return movie;
  };
  
  export default useFetchMovie;