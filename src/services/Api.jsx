import axios from 'axios';




// export async function getTrandingFilms() {
//     const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

//     return await axios.get(`${BASE_URL}?api_key=99f1057047bac17f2e8e4b1a5230a5c2`);
// }

// export async function getmovieSearching(searchQuery) {
//     const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

//     return await axios.get(
//         `${BASE_URL}?api_key=99f1057047bac17f2e8e4b1a5230a5c2&query=${searchQuery}&language=en-US`
//     );
// }

// export async function getMovieDetails(id) {
//     const BASE_URL = 'https://api.themoviedb.org/3/movie/';

//     return await axios.get(`${BASE_URL}${id}?api_key=99f1057047bac17f2e8e4b1a5230a5c2&language=en-US`);
// }

// export async function getCastDetails(id) {
//     const BASE_URL = 'https://api.themoviedb.org/3/movie/';

//     return await axios.get(`${BASE_URL}${id}/credits?api_key=99f1057047bac17f2e8e4b1a5230a5c2&language=en-US`);
// }

// export async function getMovieReviews(id) {
//     const BASE_URL = 'https://api.themoviedb.org/3/movie/';

//     return await axios.get(`${BASE_URL}${id}/reviews?api_key=99f1057047bac17f2e8e4b1a5230a5c2&language=en-US`);
// }


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
// export {
//     getTrandingFilms,
//     getMovieId,
//     getMovieIdReviews,
//     getMovieIdCredits,
//     getSearchMovies,
// };