import React from "react";
import { NavigateNext } from "@styled-icons/material";

interface Props {
  title: string;
}

const Filter: React.FC<Props> = ({ title }) => {
  return (
    <div className=" rounded-md p-[10px] gap-y-4 px-4 shadow-md border-[0.3px] border-r-slate-200 ">
      <div className="flex justify-between ">
        <span className="font-semibold ">{title}</span>
        <NavigateNext className="h-7 w-7" />
      </div>
    </div>
  );
};

export default Filter;
