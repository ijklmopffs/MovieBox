import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/Logo2.svg";
import home from "../assets/Home.svg";
import projector from "../assets/Movie Projector.svg";
import tv from "../assets/TV Show.svg";
import calender from "../assets/Calendar.svg";

export default function Moviepage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [image, setImage] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ0ZjYyYzBiZThjZDExMWRkMjAwMTEyYmMxZWZhMCIsInN1YiI6IjY0ZmUzYjliZWZlYTdhMDBmZDFhNDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._AW7qComCcnl8g5nlg8kIcwEwyDDdTe4mS_SqXE7Mm8",
    },
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = "http://image.tmdb.org/t/p/w500";
      setImage(url);
      fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then((response) => response.json())
        .then((data) => {
          setMovieDetails(data);
        })
        .catch((err) => console.error(err));
    };

    fetchMovieDetails();
  }, [id]);

  console.log(movieDetails);

  function formatDateToReadable(dateString) {
    // Create a Date object from the input date string
    const date = new Date(dateString);

    // Define an array to store the month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the day, month, and year
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    // Create a suffix for the day (e.g., "1st", "2nd", "3rd", "4th", etc.)
    const daySuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    const formattedDate = `${daySuffix(day)} ${monthNames[month]}, ${year}`;

    return formattedDate;
  }

  const formattedDate = formatDateToReadable(movieDetails?.release_date);

  return (
    <div className="p-2 flex flex-col md:flex-row items-center justify-center md:gap-96">
      <div className="flex flex-col items-start gap-4">
        <img src={logo} alt="" />
        <div className="flex items-start md:flex-col flex-wrap sm:flex-nowrap gap-8 md:gap-16">
          <div className="flex items-center gap-2">
            <img src={home} alt="" className="w-6" />
            <p>Home</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={projector} alt="" className="w-6" />
            <p>Movies</p>
          </div>
          <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src={tv} alt="" className="w-6" />
            <p>Tv Series</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={calender} alt="" className="w-6" />
            <p>Upcoming</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-6">
        <img
          src={`${image}${movieDetails?.poster_path}`}
          alt="movie-poster"
          data-testid="movie-poster"
          className="w-96 object-center rounded-md aspect-auto"
        />
        <h1 data-testid="movie-title">{movieDetails?.title}</h1>
        <p data-testid="movie-release-date">{formattedDate}</p>
        <p data-testid="movie-runtime">{movieDetails?.runtime} minutes</p>
        <p data-testid="movie-overview" className="md:w-[30rem] text-start">
          {movieDetails?.overview}
        </p>
      </div>
    </div>
  );
}
