"use client";
import { useState, useEffect } from "react";
import useFetchMovie from "@/Hooks/useFetchMovie";
import NavInfo from "@/components/NavInfo/NavInfo";
import Poster from "@/components/Poster/Poster";
import { apiKey, movieUrl } from "@/utils/constants";
import Cast from "@/components/Cast/Cast";
import MoreDetails from "@/components/MoreDetails/MoreDetails";

interface Props {
  params: {
    id: string;
  };
}
const MovieDetails: React.FC<Props> = ({ params }) => {
  const movie = useFetchMovie(`${movieUrl}${params.id}?api_key=${apiKey}`);
  const [keywords, setKeywords] = useState<MovieKeyword | null>(null);
  const [social, setSocial] = useState<MovieSocialMedia | null>(null);
  const [cast, setCast] = useState<Array<Cast> | null>(null);

  useEffect(() => {
    fetch(`${movieUrl}${params.id}/credits?api_key=${apiKey}`)
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

  const getCurrency = (num: number | null) => {
    if (null) return null;
    const formatter = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(num as number);
  };
  return (
    <div>
      <NavInfo />
      {movie && (
        <Poster
          movie={movie}
          credist={cast?.filter((e, i) => i % 5 === 0 && i < 30) as Array<Cast>}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-10 mb-12 pt-7 px-5">
        {cast && <Cast cast={cast} className="col-span-8 px-2 md:px-6" />}
        <MoreDetails
          originalLanguage={movie?.originalLanguage}
          status={movie?.status}
          revenue={getCurrency(movie?.revenue as number) as string}
          links={social as MovieSocialMedia}
          keywords={keywords?.keywords}
          homepage={movie?.homepage}
          className="col-span-2 px-5 "
        />
      </div>
    </div>
  );
};

export default MovieDetails;
