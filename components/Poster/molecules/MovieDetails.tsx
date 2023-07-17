import { numbersToMinuts } from "@/services/conversor";
import React from "react";
interface Props {
  releaseDate: string;
  genres: Array<string>;
  runtime: number;
}
const MovieDetails: React.FC<Props> = ({ releaseDate, genres, runtime }) => {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-1 justify-center lg:justify-start items-center bg-slate-700/40 lg:bg-transparent py-2 px-2 mb-5 border-y border-slate-600 lg:border-none ">
      <li className=" px-[4px] border-[0.5px] border-slate-500">PG - 13</li>
      <li>
        {new Date(releaseDate).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </li>
      <li className="list-none lg:list-disc">
        {genres.map((e) => e).join(", ")}
      </li>
      <li className="list-none lg:list-disc">{numbersToMinuts(runtime)}</li>
    </ul>
  );
};

export default MovieDetails;
