
import { Link } from 'react-router-dom';

export default function AdditionalInfo({ location }) {
    return (
        <div
        // className={styles.additionalWrap}
        >
            <h2>Additional Information</h2>
            <ul
            // className={styles.additionalLinkWrap}
            ><li><Link
                // className={styles.additionalLink}
                to="cast"
                state={{ from: location }}
            >
                Cast
            </Link>
                </li>
                <li><Link
                    // className={styles.additionalLink}
                    to="reviews"
                    state={{ from: location }}
                >
                    Reviews
                </Link></li>

            </ul>
        </div>
    );
}