import { options, urlImage } from "@/utils/constants";
import React from "react";
import Rate from "./Rate";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { title, rate, genres, imgPath, releaseDate } = movie;
  const date = new Date(releaseDate).toLocaleDateString("en-Us", options);
  return (
    <div className="rounded-md overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={`${urlImage}${imgPath}`}
          className="h-[100%] w-[100%] object-cover"
        />
        <Rate />
      </div>
      <div className="px-3 py-2">
        <h3 className="font-semibold ">{title}</h3>
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
