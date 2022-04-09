import React, {useState, useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const random = Math.floor(Math.random() * request.data.results.length) 
            setMovie(request.data.results[random])
            return request;
        }

        fetchData();
    }, [])

    return (
        <header className='banner'
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    )
}

export default Banner