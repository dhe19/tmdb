import React from "react";
import Filter from "./Filter";

const Filters: React.FC<StylingProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className=" font-semibold text-[23px] mb-5">Popular Movies</h2>
      <div className="flex flex-col gap-3">
        <Filter title="Sort" />
        <Filter title="Where to Watch" />
        <Filter title="Filters" />
      </div>
    </div>
  );
};

export default Filters;
