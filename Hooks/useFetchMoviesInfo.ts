import { apiKey, movieUrl } from "@/utils/constants";
import { useEffect, useState } from "react";




const useFetchMoviesInfo = (id: string) => {
  const [movie, setMovie] = useState<FullMovie | null>(null);
  const [keywords, setKeywords] = useState<MovieKeyword | null>(null);
  const [social, setSocial] = useState<MovieSocialMedia | null>(null);
  const [cast, setCast] = useState<Array<Cast> | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${movieUrl}${id}?api_key=${apiKey}`);
        const data = await res.json();

        setMovie({
          title: data.title,
          releaseDate: data.release_date,
          genres: data.genres.map((e: any) => e.name),
          rate: data.vote_average,
          imgPath: data.poster_path,
          backdropPath: data.backdrop_path,
          overview: data.overview,
          status: data.status,
          tagline: data.tagline,
          budget: data.budget,
          revenue: data.revenue,
          originalLanguage: data.original_language,
          homepage: data.homepage,
          runtime: data.runtime,
        } as FullMovie);

      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovie(null);
      }
    };

    fetchMovies();

    return () => setMovie(null);
  }, []);


  useEffect(() => {
    fetch(`${movieUrl}${id}/credits?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) =>
        setCast(
          data.cast.map(
            (e: any) =>
            ({
              name: e.original_name,
              imageProfile: e.profile_path,
              character: e.character,
              knownForDepartment: e.known_for_department,
            } as Cast)
          )
        )
      );
  }, []);

  useEffect(() => {
    fetch(`${movieUrl}${id}/external_ids?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) =>
        setSocial({
          facebook: data.facebook_id,
          instagram: data.instagram_id,
          twitter: data.twitter_id,
        })
      );
  }, []);

  useEffect(() => {
    fetch(`${movieUrl}${id}/keywords?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) =>
        setKeywords({
          keywords: data.keywords.map((e: any) => e.name) as Array<string>,
        })
      );
  }, []);

  return { movie, keywords, cast, social };
};

export default useFetchMoviesInfo;