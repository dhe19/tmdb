"use client";
import { urlImage } from "@/utils/constants";
import ActionsMenu from "./molecules/ActionsMenu";
import Credits from "./molecules/Credits";
import MovieDetails from "./molecules/MovieDetails";

interface Props {
  movie: FullMovie;
  credist?: Array<Cast>;
}

const Poster: React.FC<Props> = ({ movie, credist }) => {
  const {
    imgPath,
    title,
    rate,
    releaseDate,
    backdropPath,
    overview,
    tagline,
    genres,
    runtime,
  } = movie;

  return (
    <div
      className={"min-h-[60vh] relative bg-cover py-2"}
      style={{ backgroundImage: `url(${urlImage}${backdropPath})` }}
    >
      <div className="absolute top-0 bg-slate-950/80 z-10 w-full h-full"></div>
      <div className="grid grid-cols-10 h-full relative z-20">
        <div className="h-full col-span-3 p-8">
          <img
            src={urlImage + imgPath}
            alt={title}
            className="min-h-[55vh] mx-auto rounded-lg"
          />
        </div>
        <div className="col-span-7 text-white">
          <h1 className="text-3xl mb-1 mt-6 font-semibold">{title}</h1>
          <MovieDetails
            runtime={runtime}
            genres={genres}
            releaseDate={releaseDate}
          />
          <ActionsMenu />
          <h3 className="text-xl italic font-light my-5">{tagline}</h3>
          <div>
            <h3 className="text-2xl font-semibold capitalize mb-2">overview</h3>
            <p>{overview}</p>
          </div>
          <Credits credist={credist} />
        </div>
      </div>
    </div>
  );
};

export default Poster;
