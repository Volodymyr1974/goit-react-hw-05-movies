import * as serviceApi from '../services/Api';
import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import CardMovieInfo from '../components/CardMovieInfo/CardMovieInfo';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import ClickBack from '../components/ClickBack/ClickBack';

export default function MovieDetailsView() {
    const [movieDetails, setmMovieDetails] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        if (movieId === undefined) {
            return;
        }
        serviceApi.getMovieId(movieId).then(r => setmMovieDetails(r));
    }, [movieId]);

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    console.log(location);
    return (
        <>
            {movieDetails && (
                <>
                    <ClickBack
                    />
                    <CardMovieInfo
                        poster={movieDetails.poster_path}
                        title={movieDetails.original_title}
                        overview={movieDetails.overview}
                        score={movieDetails.vote_average}
                        genres={movieDetails.genres}
                        dateRelis={movieDetails.release_date.slice(0, 4)} />

                </>
            )}
            <AdditionalInfo location={backLinkHref} />
            <Suspense fallback={<div>Завантажуємо</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}