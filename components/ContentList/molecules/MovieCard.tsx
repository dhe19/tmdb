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
    <div className="rounded-md overflow-hidden shadow-md">
      <div className="relative">
        <Link href={`/movies/${id}`}>
          <img
            src={`${urlImage}${imgPath}`}
            className="h-[100%] w-[100%] object-cover"
          />
        </Link>
        <Rate />
      </div>
      <div className="px-3 py-2">
        <Link href={`/movies/${id}`} className="font-semibold block ">
          {title}
        </Link>
        <span>{date}</span>
        {/*  <ul>
          {genres?.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default MovieCard;
