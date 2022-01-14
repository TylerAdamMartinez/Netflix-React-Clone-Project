import { useEffect, useState } from 'react';
import './App.css';
import Netflix_Title_Banner from "./Netflix_Title_Banner_logo.svg"
import requests from './request';
import Row from './Row';
import Banner from './Banner';

const NavBar = () => {
  const navBarList = [
    {id: 0, element: "Home"},
    {id: 1, element: "TV Shows"},
    {id: 2, element: "Movies"},
  ];

  return (
    <nav className='navBar'>
      <img src={Netflix_Title_Banner} alt='Netflix Banner Logo' height={100} width={100}/>
      <ul>
        { navBarList.map((listItem) => (<li key={listItem.id}>{listItem.element}</li>)) }
      </ul>
    </nav>
  );
};


const App = () => {
  const rowTitles = [ 
  {title : "Netflix Originals" , imgURL : requests.fetchNetflixOriginals, posterImg : true },
  {title : "Trending" , imgURL : requests.fetchTrending, posterImg : false },
  {title : "Top Rated" , imgURL : requests.fetchTopRated, posterImg : false },
  {title :  "Action Movies" , imgURL : requests.fetchActionMovies, posterImg : false},
  {title : "Comdey Movies" , imgURL : requests.fetchComdeyMovies, posterImg : false},
  {title : "Horror Movies" , imgURL : requests.fetchHorrorMovies, posterImg : false },
  {title : "Romance Movies" , imgURL : requests.fetchRomanceMovies, posterImg : false },
  {title : "Documentaries" , imgURL : requests.fetchDocumentariesMovies, posterImg : false },
  ];

  return (
    <>
      <NavBar />
      <Banner />
      {rowTitles.map((rowTitle) => {
        return (<Row title={rowTitle.title} fetchURL={rowTitle.imgURL} posterImg={rowTitle.posterImg} />)
      })}
    </>
  );
}

export default App;
