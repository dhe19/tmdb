import { options, urlImage } from "@/utils/constants";
import React from "react";
import Rate from "./Rate";
import Link from "next/link";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { title, rate, id, imgPath, releaseDate } = movie;
  const date = new Date(releaseDate).toLocaleDateString("en-Us", options);
  return (
    <div className="rounded-md overflow-hidden shadow-md flex md:block h-40 md:h-auto my-2">
      <div className="relative w-24 md:w-auto">
        <Link href={`/movies/${id}`}>
          <img
            src={`${urlImage}${imgPath}`}
            className="h-[100%] w-[100%] object-cover"
          />
        </Link>
        <Rate />
      </div>
      <div className="px-3 py-4 flex flex-col ">
        <Link href={`/movies/${id}`} className="font-semibold block ">
          {title}
        </Link>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
