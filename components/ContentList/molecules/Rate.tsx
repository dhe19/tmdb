import React from "react";

const Rate = () => {
  return (
    <div className="absolute left-1 bottom-1">
      <div className="W-100 h-100 bg-slate-900 rounded-full">
        <div className="progress before:rotate-[calc((10_-_50)_*_0.01turn)]">
          <span className=" z-100">{8}%</span>
        </div>
      </div>
    </div>
  );
};

export default Rate;
