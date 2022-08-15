import { Link } from 'react-router-dom';
import styles from './ClickBack.module.css';
import { useLocation } from 'react-router-dom';

export default function ClickBack() {
    const location = useLocation();
    return (
        <Link
            className={styles.button}
            to={location.state?.from ?? "/"}>
            {"<--"} Go back
        </Link>
    );
}
