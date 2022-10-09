import "./MovieCardPage.css";
import { Link } from "react-router-dom";



function MovieCardPage({movies}){
    // passing key={index} below - why am I still getting a warning?? stating each child in a list should have a unique key??
    // tried <li key={index}> as well. same error
    const movieList = movies.map((element, index) => {
        return (
            <>
                <div className="movie-card" key={index}>
                    <div className="movie-card-helper">
                        <div className="movie-poster-container">
                            <img className="movie-poster" src={`${element.poster_path}`} />                        
                        </div>
                        <div className="movie-card-info">
                            <h1 className="movie-poster-title"> {element.title} </h1>
                            <h3 className="movie-poster-release-date"> Release Date: {element.release_date} </h3>
                            <div className="detail-link">
                                <Link to={`/movies/details/${element.title}`}>
                                    Click Here for More Details {element.title}
                                </Link>
                            </div>    
                        </div>
                    </div>
                </div>

            </>
        )
    })


    return(
        <>
            {movieList}
        </>
    )
}


export default MovieCardPage




