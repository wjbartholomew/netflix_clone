import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import "./Row.css";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
     window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        async function fetchData() {
            
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            window.scrollTo(0, 0)
            return request;
        }
    fetchData();
}, [fetchUrl]);

const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1, 
    },
};

const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl("");
    }
    else {
        console.log("movie:", movie)
        movieTrailer(movie?.title || "")
        .then((url) => {
            // https:www.youtube.com/watch?v=XtMThy8QKgl
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

// console.table(movies);

    return(
        <div className = "row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                        <img 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/> 
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row;