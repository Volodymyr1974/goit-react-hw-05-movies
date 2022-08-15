import { useState } from "react";
import style from './SearchBar.module.css';
import PropTypes from 'prop-types';
// import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';



export default function SearchBar({ onSubmit, value }) {
    const [qwery, setQwery] = useState(value);

    const searchInput = (e) => {
        setQwery(e.currentTarget.value.toLowerCase());
    };
    const searchSubmit = (e) => {
        e.preventDefault();
        if (qwery.trim() === '') {
            return Notiflix.Notify.failure('Вибачте, поле пошуку не заповнено. Введіть запит для пошуку.');
        }

        onSubmit(qwery);
    };
    return (
        <form
            className={style.SearchForm}
            onSubmit={searchSubmit}>


            <input
                className={style.SearchForm_input}
                type="text"
                value={qwery}
                autoComplete="off"
                autoFocus
                onChange={searchInput}

            />
            <button type="submit"
                className={style.SearchForm_button}
            >


                Search
            </button>
        </form>

    );

};
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};