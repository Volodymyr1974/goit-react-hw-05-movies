import styles from './CardMovieInfo.module.css';
import PropTypes from 'prop-types';
export default function CardMovieInfo({
    id,
    title,
    overview,
    score,
    poster,
    genres = [],
    dateRelis,
}) {

    const src = poster
        ? `https://image.tmdb.org/t/p/w200${poster}`
        : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';
    return (
        <div className={styles.filmInfo}>
            <div className={styles.poster}>
                <img src={src} alt="" />
            </div>
            <div>
                <h2>
                    {title} ({dateRelis})
                </h2>
                <p className={styles.subtitle}>User Score: {Math.round(score) * 10}%</p>
                <p className={styles.subtitle}>Overview</p>
                <p >{overview}</p>
                <p className={styles.subtitle}>Genres</p>
                <p >{genres.map(el => el.name).join(', ')}</p>
            </div>
        </div>
    );
}
CardMovieInfo.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    dateRelis: PropTypes.string.isRequired,
};
