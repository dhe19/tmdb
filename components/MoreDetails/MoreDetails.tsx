import React from "react";

interface Props extends StylingProps {
  links?: MovieSocialMedia;
  status?: string;
  originalLanguage?: string;
  revenue?: string;
  keywords?: Array<String>;
  homepage?: string;
}
const MoreDetails: React.FC<Props> = ({
  className,
  links,
  status,
  originalLanguage,
  revenue,
  keywords,
  homepage,
}) => {
  return (
    <div className={className}>
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
      <ul className="mb-6">
        <li className="flex flex-col my-4 font-light text-sm">
          <span className="font-semibold text-base">Status</span>
          {status ?? "-"}
        </li>
        <li className="flex flex-col my-4 font-light text-sm">
          <span className="font-semibold text-base">Original Language</span>
          {originalLanguage ?? "-"}
        </li>
        <li className="flex flex-col my-4 font-light text-sm">
          <span className="font-semibold text-base">Revenue</span>
          {revenue ?? "-"}
        </li>
      </ul>

      <div>
        <h3 className="font-semibold text-lg">Keywords</h3>
        <ul className="flex flex-wrap gap-1 text-sm">
          {keywords?.map((e, i) => (
            <li
              key={i}
              className="bg-gray-300 rounded-lg px-2 py-1 border border-gray-400"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreDetails;
