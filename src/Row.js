import React, { useEffect, useState } from "react";
import tmdbApiRequestInstance from "./axios";
import "./Row.css";

const Row = (props) => {
    const imgBaseURL = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const requestRowData = async() => {
           const request = await tmdbApiRequestInstance.get(props.fetchURL);
           setMovies(request.data.results);
           return request;
        };
        
        requestRowData();
    }, [props.fetchURL]);

    return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="row_container">
            { movies.map((movie) => {
                return (
                    <>
                        <img 
                            key={movie.id} 
                            className={`row_poster ${props.posterImg ? "Netflix_Original" : ""}` }
                            src={`${imgBaseURL}${ props.posterImg ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} 
                        />
                    </>
                )                        
            }) }
        </div>
    </div>
    );
};

export default Row;