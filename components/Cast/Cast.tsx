import React from "react";
import CastCard from "./CastCard";

interface Props extends StylingProps {
  cast: Array<Cast>;
}
const Cast: React.FC<Props> = ({ cast, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl  font-semibold mb-4">Top Billed Cast</h2>
      <div className="  flex gap-4 overflow-x-scroll py-6 px-2  max-w-maxh  scrollbar">
        {cast.map((e, i) => {
          if (i < 9) {
            return (
              <CastCard
                name={e.name}
                character={e.character}
                image={e.imageProfile}
                key={i}
              />
            );
          }
        })}
        <div className="flex items-center justify-center text-2xl font-semibold ">
          <p className="w-40 cursor-pointer">View More</p>
        </div>
      </div>
    </div>
  );
};

export default Cast;
