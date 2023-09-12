import { useState, useEffect } from "react";
import favorite from "../assets/Favorite.svg";
import { Link } from "react-router-dom";

export default function Featured({ movieId }) {
  const [resultsArray, setResultsArray] = useState(null);
  const [image, setImage] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ0ZjYyYzBiZThjZDExMWRkMjAwMTEyYmMxZWZhMCIsInN1YiI6IjY0ZmUzYjliZWZlYTdhMDBmZDFhNDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._AW7qComCcnl8g5nlg8kIcwEwyDDdTe4mS_SqXE7Mm8",
    },
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const url = "http://image.tmdb.org/t/p/w500";
      setImage(url);
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setResultsArray(data);
        })
        .catch((err) => console.error(err));
    };

    fetchMovie();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto mt-20 p-2">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-4xl">Featured Movies</h2>
        <a href="/" className="text-rose-700 font-semibold">
          See more
        </a>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {resultsArray?.results.slice(0, 10).map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <div className="w-54" key={movie.id} data-testid="movie-card">
                <img
                  src={favorite}
                  alt=""
                  onClick={handleClick}
                  className={
                    click
                      ? "absolute cursor-pointer bg-red-500 rounded-full"
                      : "absolute cursor-pointer bg-transparent rounded-full w-6 m-2"
                  }
                />
                <img
                  src={`${image}${movie.poster_path}`}
                  alt="movie-poster"
                  data-testid="movie-poster"
                />
                <p
                  data-testid="movie-title"
                  className="my-1 text-start font-bold"
                >
                  {movie.title}
                </p>
                <p data-testid="movie-release-date" className="text-start">
                  Release date: {movie.release_date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
