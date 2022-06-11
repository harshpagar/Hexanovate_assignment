import { useEffect, useState } from "react";
import "../styles/Home.css";
export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      });
  };
  console.log(movies);
  return (
    <>
      <h1>Movies</h1>
      <input type="search" placeholder="Search"></input>
      <section className="main">
        {movies.map((el) => {
          return (
            <>
              <div className="container">
                <div className="img">
                  <img src={el.poster} alt="images"></img>
                </div>

                <span className="title">{el.title}</span>
                <br />
                <span className="genre">{el.genre}</span>
                <br />
                <span className="imdb">{el.imdbRating}</span>
                <br />
                <span className="rel">{el.released}</span>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
