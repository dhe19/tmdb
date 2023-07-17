import { urlImage } from "@/utils/constants";
import React from "react";

interface Props {
  name: string;
  image: string;
  character: string;
}
const CastCard: React.FC<Props> = ({ name, image, character }) => {
  return (
    <div className="rounded-lg shadow-lg shadow-black/40">
      <div className="w-[150px] rounded-t-lg overflow-hidden">
        <img
          src={urlImage + image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 py-4">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm font-light">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
