import { apiKey, popularUrl } from "@/utils/constants";
import MovieCard from "./molecules/MovieCard";
import useFetchMovies from "@/Hooks/useFetchMovies";

const ContentList: React.FC<StylingProps> = ({ className }) => {
  const movies = useFetchMovies(`${popularUrl}?api_key=${apiKey}`);
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
