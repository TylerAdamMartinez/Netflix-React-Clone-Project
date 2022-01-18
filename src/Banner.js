import { useEffect, useState } from "react";
import tmdbApiRequestInstance from "./axios";
import requests from "./request";
import "./Banner.css";


const Banner = () => {
    const imgBaseURL = "https://image.tmdb.org/t/p/original/";
    const [movieBanner, setMovieBanner] = useState([]);

    useEffect(() => {
        const fetchMovieBannerData = async() => {
            const requestMovieBannerData = await tmdbApiRequestInstance.get(requests.fetchNetflixOriginals);
            const getRandomInt = () => {
                return Math.floor(Math.random() * requestMovieBannerData.data.results.length - 1);
            };
            let randomMovie = getRandomInt();

            setMovieBanner(requestMovieBannerData.data.results[randomMovie]); 
        };

        fetchMovieBannerData();
    }, []);

    return (
        <header className="Banner" 
            style={{ backgroundImage: `url(${imgBaseURL}${movieBanner?.backdrop_path})`, }} >
            <div className="BannerDetail">
                <h1>{ movieBanner?.name || movieBanner?.title }</h1>
                <p className="BannerOverview">{ movieBanner?.overview }</p>
                <div className="Banner_btns">
                    <button>Play</button>
                    <button>More Info</button>
                </div>                
            </div>

        </header>
    )
};

export default Banner;