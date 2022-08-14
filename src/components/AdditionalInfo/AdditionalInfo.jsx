import styles from './AdditionalInfo.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AdditionalInfo({ location }) {
    return (
        <div className={styles.additional}>
            <h2 className={styles.subtitle}>Additional Information</h2>
            <ul className={styles.additional_list}>
                <li>
                    <Link
                        to="cast"
                        state={{ from: location }}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link
                        to="reviews"
                        state={{ from: location }}>
                        Reviews
                    </Link></li>
            </ul>
        </div>
    );
}
AdditionalInfo.propTypes = {
    location: PropTypes.object.isRequired,
};