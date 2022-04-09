import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData();

    }, [fetchUrl])

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))   
            })
            .catch(error => console.log(error))                 
        }
    }    

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                    className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`} key={movie.id} onClick={() => {
                        handleClick(movie)
                    }} />
                ))}
            </div>
            {trailerUrl && <Youtube className='yt-video' videoId={trailerUrl} opts={{
                height: '600',
                width: '100%',
                playerVars: {
                    autoplay: 1,
                }
            }} />}
        </div>
    )
}

export default Row;