import { numbersToMinuts } from "@/services/conversor";
import React from "react";
interface Props {
  releaseDate: string;
  genres: Array<string>;
  runtime: number;
}
const MovieDetails: React.FC<Props> = ({ releaseDate, genres, runtime }) => {
  return (
    <ul className="flex gap-5 mb-5">
      <li className=" px-[4px] border-[0.5px] border-slate-500">PG - 13</li>
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
  );
};

export default MovieDetails;
