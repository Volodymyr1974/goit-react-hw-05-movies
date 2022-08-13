import { Link } from 'react-router-dom';
// import styles from './GoBackLink.module.scss';

import { useLocation } from 'react-router-dom';

export default function ClickBack() {
    const location = useLocation();
    console.log(location);
    return (
        <Link
            // className={styles.backLink}
            to={location?.state?.from ?? '/'}>
            Go back
        </Link>
    );
}