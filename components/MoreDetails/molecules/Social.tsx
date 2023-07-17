import React from "react";
interface Props {
  links?: MovieSocialMedia;
  homepage?: string;
}

const Social: React.FC<Props> = ({ links, homepage }) => {
  return (
    <ul className="flex gap-3 mb-5 ">
      <li>
        <a href={`https://www.facebook.com/${links?.facebook}`}>
          <img src={"/assets/images/fb.svg"} className="w-8 h-8" alt="" />
        </a>
      </li>
      <li>
        <a href={`https://www.twiiter.com/${links?.twitter}`}>
          <img src={"/assets/images/tw.svg"} className="w-8 h-8" alt="" />
        </a>
      </li>
      <li className="pr-2 border-r-[0.3px] border-slate-600">
        <a href={`https://www.instagram.com/${links?.instagram}`}>
          <img src={"/assets/images/in.svg"} className="w-8 h-8" alt="" />
        </a>
      </li>
      <li>
        <a href={homepage}>
          <img src={"/assets/images/ch.svg"} className="w-8 h-8" alt="" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
