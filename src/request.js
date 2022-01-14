import tmdbApi from "./tmdbApiKey";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${tmdbApi.key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${tmdbApi.key}&with_networks-213`,
    fetchTopRated: `/movie/top_rated?api_key=${tmdbApi.key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${tmdbApi.key}&with_genres=28`,
    fetchComdeyMovies: `/discover/movie?api_key=${tmdbApi.key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${tmdbApi.key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${tmdbApi.key}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${tmdbApi.key}&with_genres=99`,
};

export default requests;