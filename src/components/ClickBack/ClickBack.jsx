import { Link } from 'react-router-dom';
import styles from './ClickBack.module.css';
import PropTypes from 'prop-types';

export default function ClickBack({ onGoBack }) {

    return (
        <Link
            className={styles.button}
            to={onGoBack}>
            {"<--"} Go back
        </Link>
    );
}
ClickBack.propTypes = {
    onGoBack: PropTypes.object.isRequired,
}