import './Navigation.css';

const Navigation = (props) => {
    return (
        <nav>
            <ul>
                <li><a href="/">Homepagina</a></li>
                <li><a href="/series">Series</a></li>
                <li><a href="/films">Films</a></li>
                <li><a href="/new">Nieuw</a></li>
                <li><a href="/popular">Populair</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;