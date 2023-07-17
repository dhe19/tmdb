import React from "react";
import { Plus } from "@styled-icons/foundation";
import { Search } from "@styled-icons/material";
const ActionsMenu = () => {
  return (
    <div className="hidden md:flex   items-center gap-6">
      <Plus className="hidden w-5 h-5 cursor-pointer" />
      <span className="square-language ">EN</span>
      <span>Login</span>
      <span>Join TMDB</span>
      <Search className="w-8 h-7 cursor-pointer text-sky-500" />
    </div>
  );
};

export default ActionsMenu;
