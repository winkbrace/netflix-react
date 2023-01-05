import './Hero.css';
import Button from "./button/Button";

const Hero = (props) => {
    return (
        <div className="hero-container">
            <img src={props.background} alt="" className="hero"/>
            <div className="vignette">
                <img src={props.logo} alt={props.title}/>
                <p>{props.synopsis}</p>
                <div className="button-container">
                    <Button type="primary" icon="play" text="Afspelen"/>
                    <Button type="secondary" icon="info" text="Meer informatie"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;