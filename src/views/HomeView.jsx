import { useEffect, useState } from 'react';
import * as serviceApi from '../services/Api';
import { Link } from 'react-router-dom';

export default function HomeView() {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        serviceApi.getTrandingFilms().then(r => setMovies(r.results));
    }, []);

    return (
        <><h1>Trendind today</h1>
            {movies &&
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>}
        </>





    )
}