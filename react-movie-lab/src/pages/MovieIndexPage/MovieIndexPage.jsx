import "./MovieIndexPage.css";
import MovieCardPage from "./MovieCardPage/MovieCardPage";
import NavBar from "../../components/NavBar/NavBar";



function MovieIndexPage({username, movies}){
    return (
        <div className="movie-index-full-screen-container">
            <NavBar username={username}/>
            <MovieCardPage movies={movies}/>
        </div>
    );
  }
  
export default MovieIndexPage;



