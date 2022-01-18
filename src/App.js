import './App.css';
import requests from './request';
import NavBar from './NavBar';
import Row from './Row';
import Banner from './Banner';

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
