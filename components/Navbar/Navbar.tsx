"use client";
import React from "react";
import { Plus, MagnifyingGlass } from "@styled-icons/foundation";
import { Search, Menu } from "@styled-icons/material";

const Navbar = () => {
  return (
    <header className=" px-2 md:px-10 flex justify-content-between bg-[rgb(3,37,65)] text-white ">
      <nav className=" font-bold mx-auto flex w-[100%] justify-between items-center py-5 ">
        <div className="flex gap-6">
          <div className="flex items-center">
            <a
              href=""
              className="text-[20px] md:text-[28px] font-bold  tracking-widest  text-transparent text-8xl bg-clip-text bg-gradient-to-br from-green-300 to-sky-500"
            >
              TMDB
              <span className="ml-1 md:ml-2 inline-block w-14 h-4 md:h-5 rounded-xl bg-sky-500 bg-gradient-to-r from-green-300/60 to-sky-500 to-70%"></span>
            </a>
          </div>
          <ul className=" hidden lg:flex items-center gap-7 text-sm">
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </div>

        <div className="hidden md:flex   items-center gap-6">
          <Plus className="w-5 h-5 cursor-pointer" />
          <span className=" border-[0.5px] border-white text-[14px] font-semibold px-1 py-[2px] transition-all cursor-pointer rounded-sm hover:bg-white hover:text-[rgb(3,37,65)]   ">
            EN
          </span>
          <span>Login</span>
          <span>Join TMDB</span>
          <Search className="w-8 h-7 cursor-pointer text-sky-500     " />
        </div>
        <div className="block lg:hidden">
          <Menu className="w-7 h-7  text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
