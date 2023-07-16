"use client";
import { useState, useEffect } from "react";
import useFetchMovie from "@/Hooks/useFetchMovie";
import NavInfo from "@/components/NavInfo/NavInfo";
import Poster from "@/components/Poster/Poster";
import { apiKey, movieUrl } from "@/utils/constants";

interface Props {
  params: {
    id: string;
  };
}
const MovieDetails: React.FC<Props> = ({ params }) => {
  const movie = useFetchMovie(`${movieUrl}${params.id}?api_key=${apiKey}`);
  const [keywords, setKeywords] = useState<MovieKeyword | null>(null);
  const [social, setSocial] = useState<MovieSocialMedia | null>(null);

  useEffect(() => {
    fetch(`${movieUrl}${params.id}/external_ids?api_key=${apiKey}`)
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
    fetch(`${movieUrl}${params.id}/keywords?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) =>
        setKeywords({
          keywords: data.keywords.map((e: any) => e.name) as Array<String>,
        })
      );
  }, []);

  return (
    <div>
      <NavInfo />
      {movie && (
        <Poster
          keywords={keywords as MovieKeyword}
          movieInfo={movie as FullMovie}
          social={social as MovieSocialMedia}
        />
      )}
      {movie?.title}
    </div>
  );
};

export default MovieDetails;
