import React from "react";

const FALLBACK_IMAGE = process.env.PUBLIC_URL + '/assets/fallback-image.png';
let openImdbPage = (imdbID) => {
    const imdbUrl = `https://www.imdb.com/title/${imdbID}/`;
    window.open(imdbUrl, '_blank');
}
const Movie = ({movie}) => {
    const poster = movie.Poster === "N/A" ? FALLBACK_IMAGE : movie.Poster;
    return (
        <div className="movie-card" onClick={()=>openImdbPage(movie.imdbID)}>
            <img src={poster} alt={`${movie.Title} Poster`} className="movie-poster"/>
            <div className="overlay">
                <div className="movie-title">{movie.Title}</div>
                <div className="movie-year">{movie.Year}</div>
            </div>
        </div>
    );
};

export default Movie;