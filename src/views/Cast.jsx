import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as serviceApi from '../services/Api';
import ActorsList from '../components/ActorsList/ActorsList';


export default function Cast() {
    const { movieId } = useParams();

    const [castInfo, setCastInfo] = useState([])
    console.log(movieId, castInfo);

    useEffect(() => {
        serviceApi.getCastMovieId(movieId).then(r => setCastInfo(r.cast));
    }, [movieId])

    console.log(movieId, castInfo);
    return (
        <>
            <ul>
                {castInfo
                    .map(({ id, name, character, profile_path }) => {
                        return (
                            <ActorsList
                                key={id}
                                actorName={name}
                                character={character}
                                photo={profile_path}
                            />
                        );
                    })}
            </ul>
        </>
    )
}