export default function ActorsList({ actorName, character, photo }) {

    const src = photo
        ? `https://image.tmdb.org/t/p/w200${photo}`
        : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

    return (
        <li>
            <img
                // className={styles.profileImg}
                src={src} width='80' alt="" />

            <p>{actorName}</p>
            <p> Character: {character}</p>
        </li>
    );
}