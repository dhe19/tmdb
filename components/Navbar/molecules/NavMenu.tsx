import React from "react";

interface Props {
  navItems: Array<string>;
}

const NavMenu: React.FC<Props> = ({ navItems }) => {
  return (
    <ul className=" hidden lg:flex items-center gap-7 text-sm">
      {navItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default NavMenu;
