import Rate from "@/components/Rate";
import {
  Bookmark,
  Heart,
  ListThumbnails,
  Play,
  Star,
} from "@styled-icons/foundation";
import React from "react";

interface Props {
  rate: number;
}

const ActionsMenu: React.FC<Props> = ({ rate }) => {
  return (
    <ul className="flex justify-center lg:justify-start gap-5 mt-10">
      <li className="flex items-center gap-2 lg:gap-3">
        <Rate
          rate={Math.floor(rate * 10).toString()}
          className=" lg:scale-125 md:inline-block "
        />
        <span className="font-semibold pr-6 lg:p-0 border-r border-slate-300 lg:border-none">
          User <br className="hidden lg:block " /> Score
        </span>
      </li>
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
