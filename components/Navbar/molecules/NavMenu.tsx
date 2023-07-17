import Link from "next/link";
import React from "react";

interface Props {
  navItems: Array<NavItem>;
  open: boolean;
}

const NavMenu: React.FC<Props> = ({ navItems, open }) => {
  return (
    <ul
      className={`${
        open ? "flex" : "hidden"
      } flex-col absolute top-16 left-0 z-40 w-full lg:w-auto bg-[rgb(3,37,65)] py-4 lg:py-0 lg:bg-transparent lg:static  lg:flex lg:flex-row items-center gap-7 text-sm`}
    >
      {navItems.map((item, index) => (
        <li key={index} className="relative group cursor-pointer">
          {item.title}
          <ul className="hidden gap-y-4 group-hover:block p-0 lg:py-2 lg:px-4 font-light z-20 bg-[rgb(3,37,65)] text-white lg:bg-white static border-none w-full lg:w-auto lg:absolute bottom-26 rounded-lg lg:border-1 lg:border-slate-300 lg:text-slate-950">
            {item.subLinks.map((e, i) => (
              <li key={i}>
                <Link href={e.path}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
