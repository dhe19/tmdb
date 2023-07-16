"use client";
import { urlImage } from "@/utils/constants";
interface Props {
  keywords: MovieKeyword;
  social: MovieSocialMedia;
  movieInfo: FullMovie;
}
const Poster: React.FC<Props> = ({ movieInfo, social, keywords }) => {
  const {
    imgPath,
    title,
    rate,
    releaseDate,
    genres,
    backdropPath,
    overview,
    tagline,
    revenue,
    originalLanguage,
    homepage,
  } = movieInfo;

  console.log(urlImage, backdropPath);
  return (
    <div className={`h-[450px] py-10`}>
      {/* <img src={`${urlImage}${backdropPath}`} alt="" /> */}
      <div className="grid grid-cols-2">
        <div>
          <img src={urlImage + imgPath} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <ul>
            <li>pg</li>
            <li>{releaseDate}</li>
            <li></li>
            <li>Duration</li>
          </ul>

          <div>
            <span>{rate}</span>
            <span>create list</span>
            <span>favorite </span>
            <span>WATCHLISH</span>
            <span>rate</span>
            <span>play trailer</span>
          </div>

          <h3>{tagline}</h3>

          <div>
            <h3>over view</h3>
            <p>{overview}</p>

            <ul>
              <li>story</li>
              <li>director</li>
              <li>screen play</li>
              <li>screen play</li>
              <li>screen play</li>
              <li>screen play</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
