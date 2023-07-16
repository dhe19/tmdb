"use client";
import NavMenu from "./molecules/NavMenu";
import Logo from "./molecules/Logo";
import ActionsMenu from "./molecules/ActionsMenu";
import { Menu } from "@styled-icons/material";
import { navItems } from "@/utils/navItems";

const Navbar = () => {
  return (
    <header className=" px-2 md:px-10 flex justify-content-between bg-[rgb(3,37,65)] text-white ">
      <nav className=" font-bold mx-auto flex w-[100%] justify-between items-center py-5 ">
        <div className="flex gap-6">
          <Logo title="TMDB" />
          <NavMenu navItems={navItems} />
        </div>
        <ActionsMenu />
        <div className="block lg:hidden">
          <Menu className="w-7 h-7 text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
