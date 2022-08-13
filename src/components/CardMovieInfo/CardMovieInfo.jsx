
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
        <div >
            <div >
                <img src={src} alt="" />
            </div>
            <div>
                <h2>
                    {title} ({dateRelis})
                </h2>
                <p >User Score: {Math.round(score) * 10}%</p>
                <p >Overview</p>
                <p >{overview}</p>
                <p >Genres</p>
                <p>{genres.map(el => el.name).join(', ')}</p>
            </div>
        </div>
    );
}
