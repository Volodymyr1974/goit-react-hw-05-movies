import * as serviceApi from '../services/Api';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import CardMovieInfo from '../components/CardMovieInfo/CardMovieInfo';


export default function MovieDetailsView() {
    const [movieDetails, setmMovieDetails] = useState(null);
    // const [genres, setGenres] = useState([]);
    // const [poster, setPoster] = useState('');
    const { movieId } = useParams();
    useEffect(() => {
        if (movieId === undefined) {
            return;
        }

        serviceApi.getMovieId(movieId).then(r => setmMovieDetails(r));

        // async function showFilmDetails() {
        //     try {
        //         const { data } = await getMovieDetails(movieId);

        //         setmMvieDetails(data);
        //         setPoster(data.poster_path);
        //         setGenres(data.genres);
        //     } catch (error) { }
        // }
        // showFilmDetails();
    }, [movieId]);
    console.log(movieDetails);

    return (

        <>
            {movieDetails && (
                <>
                    <CardMovieInfo
                        poster={movieDetails.poster_path}
                        title={movieDetails.original_title}
                        overview={movieDetails.overview}
                        score={movieDetails.vote_average}
                        genres={movieDetails.genres}
                        dateRelis={movieDetails.release_date.slice(0, 4)} />


                </>
            )
            }

        </>


    )
}