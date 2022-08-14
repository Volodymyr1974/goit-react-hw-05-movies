import SearchBar from "components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as serviceApi from '../services/Api';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';



export default function MoviesView() {
    const [foundMovies, setFoundMovies] = useState([]);
    const [search, setSearch] = useSearchParams();
    const query = search.get('query') ?? '';

    useEffect(() => {
        async function searchMovie() {
            if (query === '') {
                return;
            }
            const { results } = await serviceApi.getSearchMovies(query)
            console.log(results);

            setFoundMovies(results)
            if (results.length === 0) {
                return Notiflix.Notify.failure(
                    'Sorry, there are no movies matching your search query. Please try again.'
                );
            }
        };

        searchMovie();
    }, [query]);

    console.log(foundMovies);

    const searchQuery = data => {
        setSearch({ query: data.toLowerCase().trim() });
    };
    return (
        <>
            <SearchBar value={query} onSubmit={searchQuery} />
            {foundMovies &&
                <ul>
                    {foundMovies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>}

        </>




    )
}