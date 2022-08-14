import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '99f1057047bac17f2e8e4b1a5230a5c2';
const PARAM = {
    trending: 'trending/movie/day',
    search: 'search/movie',
    movieID: 'movie/',
    reviews: '/reviews',
    credits: '/credits',
};
export async function getTrandingFilms() {
    const response = await axios.get(`/${PARAM.trending}?api_key=${API_KEY}`);
    return response.data;
};
export async function getMovieId(id) {
    const response = await axios.get(`/${PARAM.movieID}${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
};
export async function getMovieIdReviews(id) {
    const response = await axios.get(
        `/${PARAM.movieID}${id}${PARAM.reviews}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
};
export async function getCastMovieId(id) {
    const response = await axios.get(
        `/${PARAM.movieID}${id}${PARAM.credits}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
};
export async function getSearchMovies(query) {
    const response = await axios.get(
        `/${PARAM.search}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return response.data;
};
