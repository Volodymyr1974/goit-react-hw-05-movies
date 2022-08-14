import SearchBar from "components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as serviceApi from '../services/Api';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import MoviesList from 'components/MoviesList/MoviesList';


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

            setFoundMovies(results)
            if (results.length === 0) {
                return Notiflix.Notify.failure(
                    'Ух...Щось пішло не так, або дані за Вашим запитом відсутні'
                );
            }
        };
        searchMovie();
    }, [query]);

    const searchQuery = query => {
        setSearch({ query });
    };
    return (
        <>
            <SearchBar value={query} onSubmit={searchQuery} />
            {foundMovies && <MoviesList filmsList={foundMovies} />}
        </>
    )
}