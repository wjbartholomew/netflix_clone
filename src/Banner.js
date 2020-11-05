import React, {useState, useEffect} from 'react';
import axios from './axios.js';
import requests from './requests.js';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    return (
        <header 
        className="banner" 
        style={{
            backgroundSize: "Cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",

        }}
        >
            <div className="banner_contents">

            {/* title */}
            <h1 className="title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div>

            </div>
            {/* div with two buttons */}
            {/* description */}
            </div>
        </header>
    )
}

export default Banner
