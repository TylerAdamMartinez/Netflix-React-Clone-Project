import axios from "axios";

const tmdbApiRequestInstance = axios.create({
    baseURL : `https://api.themoviedb.org/3`,
});



export default tmdbApiRequestInstance;