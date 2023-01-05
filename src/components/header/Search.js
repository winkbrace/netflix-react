import "./Search.css";
import searchIcon from '../../assets/img/search.svg';
import {useState} from "react";

const Search = () => {
    const [active, toggleActive] = useState(false);
    const toggle = previous => ! previous;
    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') {
            return;
        }

        const search = e.target.value;
        // TODO continue. Let's use React Router to show /search/?q=... page with a Gallery component
    }

    return (
        <div className="search">
            <input type="search" className={active ? '' : 'hidden'} onKeyDown={handleKeyDown} />
            <span className={active ? 'hidden' : 'filler'}></span>
            <img src={searchIcon} alt="search" onClick={() => toggleActive(toggle)} />
        </div>
    );
}

export default Search;