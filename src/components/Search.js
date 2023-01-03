import "./Search.css";
import searchIcon from '../assets/img/search.svg';

const Search = (props) => {
    return (
        <div className="search">
            <input type="search"/>
            <img src={searchIcon} alt="search" />
        </div>
    );
}

export default Search;