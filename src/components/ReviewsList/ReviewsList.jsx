import PropTypes from 'prop-types';

export default function ReviewsList({ author, review }) {
    return (
        <li>
            <h2>Author:{author} </h2>
            <p>{review}</p>
        </li>
    );
}
ReviewsList.propTypes = {
    author: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
};