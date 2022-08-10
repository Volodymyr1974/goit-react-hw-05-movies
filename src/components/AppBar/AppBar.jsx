import styles from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';

export default function Appbar() {
    return (
        <header className={styles.header}>
            <Navigation />
        </header>
    );
}