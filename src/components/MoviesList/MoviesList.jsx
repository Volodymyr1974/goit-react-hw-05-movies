import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ filmsList }) {
    const location = useLocation();
    return (
        <ul>
            {filmsList.map(({ id, title }) => {
                return (
                    <li key={id} >
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}
                        </Link></li>
                )
            })}
        </ul>
    )
}

MoviesList.propTypes = {
    filmsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }))

}