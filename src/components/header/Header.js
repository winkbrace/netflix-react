import "./Header.css";
import NetflixLogo from "../../assets/img/Netflix_Logo_PMS.png";
import Navigation from "./Navigation";
import Search from "./Search";
import Profile from "./Profile";

const Header = (props) => {
    return (
        <header>
            <img src={NetflixLogo} alt="Netflix" className="logo"/>
            <Navigation/>
            <Search/>
            <Profile/>
        </header>
    );
}

export default Header;