import PropTypes from 'prop-types';
import styles from './ActorsList.module.css'

export default function ActorsList({ actorName, character, photo }) {
    const src = photo
        ? `https://image.tmdb.org/t/p/w200${photo}`
        : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

    return (
        <li>
            <img src={src} width='80' alt="" />
            <p className={styles.subtitle}>{actorName}</p>
            <p className={styles.subtitle}> Character: {character}</p>
        </li>
    );
}
ActorsList.propTypes = {
    actorName: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    photo: PropTypes.string,
};