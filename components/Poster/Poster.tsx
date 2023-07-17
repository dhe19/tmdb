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
      className={
        "min-h-[60vh] relative bg-contain bg-no-repeat lg:bg-cover lg:py-2 "
      }
      style={{ backgroundImage: `url(${urlImage}${backdropPath})` }}
    >
      <div className="absolute top-0 bg-slate-950/80 z-10 w-full h-full"></div>
      <div className="grid grid-cols-1 lg:grid-cols-10 h-full relative z-20">
        <div className="h-[200px] md:h-56 lg:h-full col-span-3 px-4 md:px-8 p-0 lg:p-8 flex items-center">
          <img
            src={urlImage + imgPath}
            alt={title}
            className=" h-44 lg:h-full mr-6 lg:mx-auto rounded-lg"
          />
        </div>
        <div className="text-sm md:text-base col-span-7 text-white bg-slate-950 lg:bg-transparent ">
          <h1 className="text-lg text-center md:text-3xl lg:text-start mb-1 mt-6 font-semibold">
            {title}
          </h1>
          <MovieDetails
            runtime={runtime}
            genres={genres}
            releaseDate={releaseDate}
          />
          <ActionsMenu rate={rate} />
          <h3 className="px-4 text-lg lg:text-xl italic font-light my-5">
            {tagline}
          </h3>
          <div className="px-4 text-sm">
            <h3 className="text-xl lg:text-2xl font-semibold capitalize mb-2">
              overview
            </h3>
            <p>{overview}</p>
          </div>
          <Credits credist={credist} />
        </div>
      </div>
    </div>
  );
};

export default Poster;
