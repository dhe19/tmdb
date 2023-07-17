import { apiKey } from "@/utils/constants";
import MovieCard from "./molecules/MovieCard";
import useFetchMovies from "@/Hooks/useFetchMovies";

interface Props extends StylingProps {
  url: string;
}
const ContentList: React.FC<Props> = ({ className, url }) => {
  const movies = useFetchMovies(`${url}?api_key=${apiKey}`);
  return (
    <div className={className}>
      <div className="movies-list">
        {movies?.map((e, i) => (
          <MovieCard movie={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ContentList;
