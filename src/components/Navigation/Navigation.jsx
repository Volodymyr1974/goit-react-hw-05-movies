import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.navlink
                }>
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.navlink
                }>
                Movies
            </NavLink>
        </nav>
    );
}