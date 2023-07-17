import Link from "next/link";
import React from "react";

interface Props {
  navItems: Array<string>;
}

const NavMenu: React.FC<Props> = ({ navItems }) => {
  return (
    <ul className=" hidden lg:flex items-center gap-7 text-sm ">
      {navItems.map((item, index) => (
        <li key={index} className="relative group">
          {item}
          <ul className="hidden group-hover:block py-2 px-4 font-light z-20 bg-white absolute bottom-26 rounded-lg border border-slate-300 text-slate-950">
            <li>
              <Link href={"/"}>Popular</Link>
            </li>
            <li>
              <Link href={"/top-rated"}>Top Rated</Link>
            </li>
            <li>
              <Link href={"/upcoming"}>Upcoming</Link>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
