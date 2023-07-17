import Link from "next/link";
import React from "react";
interface Props {
  title: string;
}
const Logo: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center">
      <Link href="/" className="logo">
        {title}
        <span className="logo-shape"></span>
      </Link>
    </div>
  );
};

export default Logo;
