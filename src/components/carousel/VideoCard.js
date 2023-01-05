import './VideoCard.css';

const VideoCard = (props) => {
    return (
        <div className="video-card">
            <a href={`https://netflix.com/watch/${props.video.netflix_id}`}>
                <div className="video-card-content">
                    <img className="background" src={props.video.images.background} alt=""/>
                    <img className="logo" src={props.video.images.logo} alt={props.video.name}/>
                </div>
            </a>
        </div>
    );
};

export default VideoCard;