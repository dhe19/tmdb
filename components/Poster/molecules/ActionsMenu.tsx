import {
  Bookmark,
  Heart,
  ListThumbnails,
  Play,
  Star,
} from "@styled-icons/foundation";
import React from "react";

const ActionsMenu = () => {
  return (
    <ul className="flex justify-center lg:justify-start gap-5 mt-10">
      <li>{/* rate */}</li>
      <li className="poster-actions">
        <ListThumbnails className="h-4 w-4  " />
      </li>
      <li className="poster-actions">
        <Heart className="h-4 w-4  " />
      </li>
      <li className="poster-actions">
        <Bookmark className="h-4 w-4  " />
      </li>
      <li className="poster-actions">
        <Star className="h-4 w-4  " />
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <Play className="h-5 w-5 " />
        <span className="font-semibold">Play Trailer</span>
      </li>
    </ul>
  );
};

export default ActionsMenu;
