import Link from "next/link";
import React from "react";

interface Props {
  navItems: Array<NavItem>;
}

const NavMenu: React.FC<Props> = ({ navItems }) => {
  return (
    <ul className=" hidden lg:flex items-center gap-7 text-sm ">
      {navItems.map((item, index) => (
        <li key={index} className="relative group cursor-pointer">
          {item.title}
          <ul className="hidden group-hover:block py-2 px-4 font-light z-20 bg-white absolute bottom-26 rounded-lg border border-slate-300 text-slate-950">
            {item.subLinks.map((e) => (
              <li>
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
