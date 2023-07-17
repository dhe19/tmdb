"use client";
import {
  Star,
  Heart,
  Bookmark,
  ListThumbnails,
  Play,
} from "@styled-icons/foundation";
import { urlImage } from "@/utils/constants";
import { numbersToMinuts } from "@/services/conversor";

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
      <div className="absolute top-0 bg-slate-800/60 z-10 w-full h-full"></div>
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
          <ul className="flex gap-5 mb-5">
            <li className=" px-[4px] border-[0.5px] border-slate-500">
              PG - 13
            </li>
            <li>
              {new Date(releaseDate).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </li>
            <li>{genres.map((e) => e).join(", ")}</li>
            <li>{numbersToMinuts(runtime)}</li>
          </ul>

          <ul className="flex gap-5 mt-10">
            <li>{rate}</li>
            <li className="rounded-full bg-[rgb(3,37,65)] transition-all cursor-pointer hover:bg-green-500 w-12 h-12 flex  items-center justify-center">
              <ListThumbnails className="h-4 w-4  " />
            </li>
            <li className="rounded-full bg-[rgb(3,37,65)] transition-all cursor-pointer hover:bg-green-500 w-12 h-12 flex  items-center justify-center">
              <Heart className="h-4 w-4  " />
            </li>
            <li className="rounded-full bg-[rgb(3,37,65)] transition-all cursor-pointer hover:bg-green-500 w-12 h-12 flex  items-center justify-center">
              <Bookmark className="h-4 w-4  " />
            </li>
            <li className="rounded-full bg-[rgb(3,37,65)] transition-all cursor-pointer hover:bg-green-500 w-12 h-12 flex  items-center justify-center">
              <Star className="h-4 w-4  " />
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Play className="h-5 w-5 " />
              <span className="font-semibold">Play Trailer</span>
            </li>
          </ul>

          <h3 className="text-xl italic font-light my-5">{tagline}</h3>

          <div>
            <h3 className="text-2xl font-semibold capitalize mb-2">overview</h3>
            <p>{overview}</p>

            <ul className="grid grid-cols-3 gap-3 items-center mt-8">
              {credist?.map((e) => (
                <li className="flex flex-col">
                  <span className="font-medium text-sm">{e?.name ?? "-"}</span>
                  <span className="font-light text-sm">
                    {e?.knownForDepartment ?? "-"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
