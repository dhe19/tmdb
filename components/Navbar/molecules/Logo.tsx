import React from "react";
interface Props {
  title: string;
}
const Logo: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center">
      <a href="" className="logo">
        {title}
        <span className="logo-shape"></span>
      </a>
    </div>
  );
};

export default Logo;
