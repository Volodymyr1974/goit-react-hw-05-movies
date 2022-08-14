import PropTypes from 'prop-types';
export default function ActorsList({ actorName, character, photo }) {

    const src = photo
        ? `https://image.tmdb.org/t/p/w200${photo}`
        : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

    return (
        <li>
            <img
                src={src} width='80' alt="" />

            <p>{actorName}</p>
            <p> Character: {character}</p>
        </li>
    );
}
ActorsList.propTypes = {
    actorName: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    photo: PropTypes.string,
};