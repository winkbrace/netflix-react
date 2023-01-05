import 'normalize.css';
import './App.css';
import React from "react";
import Hero from "./components/Hero";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: null
        };
    };

    fetchHero() {
        fetch("http://localhost/api/videos/hero")
            .then((res) => res.json())
            .then((json) => {
                this.setState({hero: json});
            })
    };

    componentDidMount() {
        this.fetchHero();
    }

    render() {
        let hero = null;
        if (this.state.hero) {
            hero = <Hero title={this.state.hero.title}
                         background={this.state.hero.background}
                         logo={this.state.hero.logo}
                         synopsis={this.state.hero.synopsis}
                    />
        }

        return (
            <>
                <Header/>
                <main>
                    {hero}
                    <div className="carousels">
                        <Carousel key="sci-fi" category="sci-fi"/>
                        <Carousel key="girls" category="girls"/>
                        <Carousel key="fantasy" category="fantasy"/>
                        <Carousel key="west" category="west"/>
                        <Carousel key="history" category="history"/>
                    </div>
                </main>
            </>
        );
    }
}

export default App;
