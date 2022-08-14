import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './ClickBack.module.css';

export default function ClickBack() {
    const location = useLocation();
    console.log(location);
    return (
        <Link
            className={styles.button}
            to={location?.state?.from ?? '/'}>
            {"<--"} Go back
        </Link>
    );
}