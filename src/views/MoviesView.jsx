import SearchBar from "components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as serviceApi from '../services/Api';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';



export default function MoviesView() {
    const [foundMovies, setFoundMovies] = useState(null);
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
                    'Ух...Щось пішло не так, або дані за Вашим запитом відсутні'
                );
            }
        };

        searchMovie();
    }, [query]);

    console.log(foundMovies);
    console.log(query);
    const searchQuery = data => {
        setSearch({ query: data });
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