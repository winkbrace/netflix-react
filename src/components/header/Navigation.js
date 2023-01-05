import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li key="home"><a href="/">Homepagina</a></li>
                <li key="series"><a href="/series">Series</a></li>
                <li key="films"><a href="/films">Films</a></li>
                <li key="new"><a href="/new">Nieuw</a></li>
                <li key="popular"><a href="/popular">Populair</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;