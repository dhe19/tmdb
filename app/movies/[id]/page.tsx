"use client";
import useFetchMoviesInfo from "@/Hooks/useFetchMoviesInfo";
import NavInfo from "@/components/NavInfo/NavInfo";
import Poster from "@/components/Poster/Poster";
import Cast from "@/components/Cast/Cast";
import MoreDetails from "@/components/MoreDetails/MoreDetails";
import { getCurrency } from "@/services/conversor";

interface Props {
  params: {
    id: string;
  };
}
const MovieDetails: React.FC<Props> = ({ params }) => {
  const { movie, cast, social, keywords } = useFetchMoviesInfo(params.id);

  return (
    <div>
      <NavInfo />
      {movie && (
        <Poster
          movie={movie}
          credist={
            cast?.filter((_e, i) => i % 5 === 0 && i < 30) as Array<Cast>
          }
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-10 mb-12 pt-7 px-5">
        {cast && <Cast cast={cast} className="col-span-8 lg:px-6" />}
        <MoreDetails
          originalLanguage={movie?.originalLanguage}
          status={movie?.status}
          revenue={getCurrency(movie?.revenue as number) as string}
          links={social as MovieSocialMedia}
          keywords={keywords?.keywords}
          homepage={movie?.homepage}
          budget={getCurrency(movie?.budget as number) as string}
          className="col-span-2"
        />
      </div>
    </div>
  );
};

export default MovieDetails;
