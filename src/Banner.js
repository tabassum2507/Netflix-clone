import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
const [movie, setmovie] = useState([]);

useEffect(() => {

    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        return request;
    }
    fetchData();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backdropPosition: "center center",
              }}>


                    <div className="banner_content">
                       <h1 className="banner_title">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h1>


                        <div>
                            <button className="banner_button">Play</button>
                            <button className="banner_button">My List</button>
                        </div>
                            <h1 className="banner_discription">
                          {truncate(movie?.overview, 150)}
                            </h1>

                        </div>
                        <div className="banner_fadeBottom" />   
                 

           
        </header>
    );
}

export default Banner;
