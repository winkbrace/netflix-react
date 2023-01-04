import './Hero.css';

const Hero = (props) => {
    return(
        <div className="hero-container">
            <img src={props.background} alt="" className="hero"/>
            <div className="vignette">
                <img src={props.logo} alt={props.title}/>
                <p>{props.synopsis}</p>
                <div className="button-container">
                    <button className="color-primary">Afspelen</button>
                    <button className="color-secondary">Meer informatie</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;