import { useEffect, useState } from "react";
import tmdbApiRequestInstance from "./axios";
import requests from "./request";
import "./Banner.css";


const Banner = () => {
    const imgBaseURL = "https://image.tmdb.org/t/p/original/";
    const title = "title";
    const description = "lorem";

    const [movieBanner, setMovieBanner] = useState([]);

    useEffect(() => {
        const fetchMovieBannerData = async() => {
            const getRandomInt = (max) => {
                return Math.floor(Math.random() * max);
            };
            let randomMovie = getRandomInt(10);

            const requestMovieBannerData = await tmdbApiRequestInstance.get(requests.fetchNetflixOriginals);
            setMovieBanner(requestMovieBannerData.data.results[randomMovie]); 
        };

        fetchMovieBannerData();
    }, []);

    return (
        <header className="Banner">
            <img 
                src={`${imgBaseURL}${movieBanner.backdrop_path}`}
                alt={`${movieBanner.name}`}/>
            <div className="BannerDetail">
                <h1>{movieBanner.name}</h1>
                <p>{movieBanner.overview}</p>
                <div className="Banner_btns">
                    <button>Play</button>
                    <button>More Info</button>
                </div>                
            </div>

        </header>
    )
};

export default Banner;