import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as serviceApi from '../services/Api';
import ReviewsList from '../components/ReviewsList/ReviewsList';


export default function Reviews() {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState([])
    console.log(movieId, reviews);

    useEffect(() => {
        serviceApi.getMovieIdReviews(movieId).then(r => setReviews(r.results));
    }, [movieId])

    console.log(movieId, reviews);
    return (
        <>
            {reviews.length === 0 ? (
                'We don`t have any Reviews for this movie'
            ) : (
                <ul>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <ReviewsList key={id} author={author} review={content} />
                        );
                    })}
                </ul>
            )}
        </>

    )
}