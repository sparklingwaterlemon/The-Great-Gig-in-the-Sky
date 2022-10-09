import "./MovieDetailPage.css";
import NavBar from "../../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import {movies} from "../../../public/data.js"

function MovieDetailsPage({username}){
  //accessing the the params object and set it to the variable called id.
  let id = useParams().id;

  let filtered = movies.filter((movie) => {
    if (movie.title === id) {
      return movie;
    }
    return null;
  });

  return (
    <>
      <NavBar username={username}/>

      {filtered.map((movie) => {
        return (
          <div className="movie-detail-card">
            <h1 className="mdc-title"> {movie.title} </h1>
            <img className="mdc-poster" alt={movie.title} src={movie.poster_path} />

            <div className="mdc-info">
              <h3 className="mdc-release-date"> {movie.release_date} </h3>  
              <ul>
                {movie.cast.map((element) => {
                  return <li className="cast-li"> {element} </li>;
                })}
              </ul>
            </div>
            
          </div>
        );
      })}

    </>
  );
};

export default MovieDetailsPage;


